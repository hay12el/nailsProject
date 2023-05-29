import { View, Animated, ImageBackground, Alert } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { styles } from "../HomePage/SHomePage";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import messaging from "@react-native-firebase/messaging";
// Components
import Links from "../../components/Links/Links";
import WorkScroll from "../../components/WorkScroll/WorkScroll";
import Header from "../../components/Header/Header";
import AboutMe from "../../components/AboutMe/AboutMe";
import image from "../../../assets/kkaa.png";
import colors from "../../styles/colors";
import NewQueue from "../../components/NewQueue/NewQueue";
import ManuToggle from "../../components/ManuToggle/ManuToggle";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const scrollA = useRef(new Animated.Value(0)).current;
  const rreload = false;

  useEffect(() => {
    pushNotification();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });

    return unsubscribe;
  }, []);

  async function pushNotification() {
    let fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
    }
  }

  return (
    <View style={styles.BigContainer}>
      <StatusBar style="light" backgroundColor={colors.forth} />
      <ManuToggle />
      <Header scrollA={scrollA} />
      <View style={styles.main}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>

        <Animated.ScrollView style={{ width: "100%" }}>
          <View
            style={{
              paddingTop: 200,
            }}
          >
            <AboutMe />
          </View>

          <WorkScroll />
          <Links />
        </Animated.ScrollView>
      </View>
      {!user.isAdmin && (
        <View style={styles.overover}>
          <NewQueue rreload={rreload} />
        </View>
      )}
    </View>
  );
};

export default HomePage;

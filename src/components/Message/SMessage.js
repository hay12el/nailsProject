import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    elevation: 30,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    height: 150,
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    marginTop: "80%",
    marginLeft: 40,
  },
  buttons: {
    direction: "rtl",
    height: 55,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    bottom: 0,
  },
  button: {
    borderRadius: 7,
    padding: 3,
    width: 110,
    justifyContent: 'center',
    alignItems: "center",
    elevation: 8,
    marginHorizontal: 24,
    height: 35,
  },
  buttonOpen: {
    backgroundColor: "#FFf6f6",
  },
});

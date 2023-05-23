import { Provider } from "react-redux";
import Store from "./src/redux/store";
import Router from "./src/navigators/Router";
import React from "react";

export default function App() {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
}
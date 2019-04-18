import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNav from "./components/StackNav";
import { Constants } from "expo";
import { blue } from "./utils/colors";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";

function StatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar transluscent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{ flex: 1 }}>
          <StackNav />
        </View>
      </Provider>
    );
  }
}

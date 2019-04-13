import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StackNav from "./components/TabNav";
import { Constants } from "expo";
import { blue } from "./utils/colors";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

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
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <StackNav />
        </View>
      </Provider>
    );
  }
}

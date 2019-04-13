import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNav from "./components/TabNav";
import { Constants } from "expo";
import {blue} from "./utils/colors"


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
      <View style={{ flex: 1 }}>
        <TabNav />
      </View>
    );
  }
}

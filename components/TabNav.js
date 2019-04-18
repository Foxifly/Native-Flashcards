import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import AddDeck from "./AddDeck";
import DeckList from "./DeckList";
import { Platform } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import {white, darkBlue, lightBlue} from "../utils/colors"
import AddQuestion from "./AddQuestion"

const router = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Study",
      tabBarIcon: ({ tintColor }) =>
        Platform.OS === "ios" && (
          <MaterialCommunityIcons
            name="cards-outline"
            size={30}
            color={tintColor}
          />
        )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: "Add Deck",
      tabBarIcon: ({ tintColor }) =>
        Platform.OS === "ios" && (
          <Entypo name="squared-plus" size={30} color={tintColor} />
        )
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      tabBarLabel: "Add Question",
      tabBarIcon: ({ tintColor }) =>
        Platform.OS === "ios" && (
          <Entypo name="squared-plus" size={30} color={tintColor} />
        )
    }
  }
};

const navigationOptions = {
  tabBarOptions: {
    showIcon: true,
     activeTintColor: Platform.OS === 'ios' ? darkBlue : white,
    style: {
      padding: 10,
      height: Platform.OS === "ios" ? 60 : "auto",
      fontSize: 18,
        backgroundColor: Platform.OS === 'ios' ? white : darkBlue,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};

const TabNav =
  Platform.OS === "ios"
    ? createBottomTabNavigator(router, navigationOptions)
    : createMaterialTopTabNavigator(router, navigationOptions);

export default createAppContainer(TabNav);

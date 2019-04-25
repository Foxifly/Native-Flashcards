import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TabNav from './TabNav';
import AddDeck from './AddDeck';
import DeckZoom from "./DeckZoom"
import Quiz from "./Quiz"
import AddQuestion from "./AddQuestion"
import {white, darkBlue} from "../utils/colors"


const StackNav = createStackNavigator({
  home: {
    screen: TabNav,
    navigationOptions: {
      header: null,
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue,
      },
    }),
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue,
      },
    }),
  },
  DeckZoom: {
    screen: DeckZoom,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue,
      },
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue,
      },
    }),
  },
});


export default createAppContainer(StackNav);

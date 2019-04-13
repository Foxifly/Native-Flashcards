import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TabNav from './TabNav';
import AddDeck from './AddDeck';
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
});


export default createAppContainer(StackNav);

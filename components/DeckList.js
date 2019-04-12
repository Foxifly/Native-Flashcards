import React, { Component } from "react";
import { View, Text, Stylesheet } from "react-native";
import {decks} from "../utils/api"

class DeckList extends Component {

  render() {
console.log(Object.keys(decks))

    if (Object.keys(decks).length === 0) {
      return (
          <View>
          <Text>There aren't any decks to display</Text>
          </View>
      )

    }


      return (
        <View>
          <Text>DeckList</Text>
        </View>
      );



  }
}


export default DeckList;

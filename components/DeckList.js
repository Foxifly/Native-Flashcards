import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { deckData } from "../utils/_decks";
import {getDecks} from "../utils/api"
import { blue, white, darkBlue } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import {receiveDecks} from "../actions";
import {connect} from 'react-redux';


class DeckList extends Component {
state = {
  text: ""
}
  componentDidMount ()  {
    const {dispatch} = this.props;
    getDecks()
    .then((decks) => dispatch(receiveDecks(decks)))
  }

  render() {
    console.log(Object.keys(deckData));


    if (Object.keys(deckData).length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.noDecks}>You have not created any decks, yet!</Text>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('AddDeck')} style={styles.add}>
            <MaterialIcons
              style={styles.center}
              name="add-circle-outline"
              size={50}
              color={white}
            />
            <Text style={[styles.center, { color: white, fontSize: 18 }]}>
              Add Deck
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View>
        <Text>DeckList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    textAlign: "center"
  },
  add: {
    width: 250,
    height: 150,
    backgroundColor: blue,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,

  },
  container: {
    flex: 1,

    alignSelf: "center"
  },
  noDecks: {
    fontSize: 20,
    width:250,
    marginBottom:50,
    marginTop:50,
    textAlign:"center"
  }
});


export default connect()(DeckList);

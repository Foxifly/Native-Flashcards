import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { deckData } from "../utils/_decks";
import { getDecks } from "../utils/api";
import { blue, white, darkBlue } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { receiveDecks } from "../actions";
import { connect } from "react-redux";
import Deck from "./Deck";

class DeckList extends Component {
  state = {
    text: ""
  };
  componentDidMount() {
    const { dispatch } = this.props;

     getDecks()
       .then((decks) => dispatch((receiveDecks(decks))))
  }

  render() {
    const decks = this.props.decks || {}
    if (Object.keys(decks).length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}>
            You have not created any decks, yet!
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AddDeck")}
            style={styles.add}
          >
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
    } else {
      return (
        <ScrollView>
          <View style={styles.cardContainer}>
            <Text style={styles.titleText}>Select a deck to start studying.</Text>

            {Object.keys(decks).map(deck => {
              const currDeck = decks[deck];
              const questions = currDeck.questions;
              const questionLength = questions ? currDeck.questions.length : 0;

              return (
                <Deck
                  key={currDeck.title}
                  title={currDeck.title}
                  questions={questions}
                  questionLength={questionLength}
                  deck={currDeck}
                  {...this.props}
                />
              );
            })}
          </View>
        </ScrollView>
      );
    }


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
    borderRadius: 10
  },
  container: {
    flex: 1,
    alignSelf: "center"
  },
  titleText: {
    fontSize: 20,
    width: 300,
    marginBottom: 50,
    marginTop: 100,
    textAlign: "center"
  },
  cardContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = (state) => {
  console.log(state)
  return {
    decks: state
  }
}


export default connect(mapStateToProps)(DeckList);

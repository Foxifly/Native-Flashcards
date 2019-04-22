import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Buttons from "./Buttons";

class DeckZoom extends Component {
  render() {
    const { deck, questionLength } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>
          {questionLength} {questionLength === 1 ? "Card" : "Cards"}
        </Text>

        <Buttons
          onPress={() =>
            this.props.navigation.navigate("AddQuestion", {
              deck,
              questionLength
            })
          }
        >
          Add Question
        </Buttons>

        <Buttons onPress={() => this.props.navigation.navigate("")}>
          Start Quiz
        </Buttons>
      </View>
    );
  }
}

export default DeckZoom;

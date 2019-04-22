import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class DeckZoom extends Component {
  render() {
    const { deck, questionLength } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>
          {questionLength} {questionLength === 1 ? "Card" : "Cards"}
        </Text>


        <TouchableOpacity
        onPress={() => this.props.navigation.navigate(
          'AddQuestion',
          { deck, questionLength  }
        )}
        >
          <Text>Add Question</Text>
        </TouchableOpacity>


        <TouchableOpacity>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckZoom;

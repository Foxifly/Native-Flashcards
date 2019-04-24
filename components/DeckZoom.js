import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Buttons from "./Buttons";
import { blue, white, darkBlue } from "../utils/colors";

class DeckZoom extends Component {
  render() {
    const { deck, questionLength, text } = this.props.navigation.state.params;

    if (deck) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subTitle}>
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

    if (text) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{text}</Text>
          <Text style={styles.subTitle}>
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
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          There was an error loading this deck. Please try again later.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 42,
    color: darkBlue,
    fontWeight: "bold",
    textAlign: "center"
  },
  subTitle: {
    fontSize: 20
  }
});

export default DeckZoom;

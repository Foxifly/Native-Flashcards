import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Buttons from "./Buttons";
import { blue, white, darkBlue } from "../utils/colors";

class DeckZoom extends Component {
  state = {
    canStart: ""
  };

  startQuiz = () => {
    const { questionLength } = this.props.navigation.state.params;
    console.log(questionLength)
    if (questionLength === 0) {
      console.log("0")
      this.setState({ canStart: false });
    } else {
      console.log("true")
      this.setState({ canStart: true });
      this.props.navigation.navigate("")
    }
  };
  render() {
    const { deck, questionLength, text } = this.props.navigation.state.params;
    const {canStart} = this.state;
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

          <Buttons onPress={this.startQuiz}>
            Start Quiz
          </Buttons>

          <Text style={styles.error}>
            {canStart === false ? "Cannot start quiz. Please add questions first" : ""}
          </Text>

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
  },
  error: {
    color: "red"
  }
});

export default DeckZoom;

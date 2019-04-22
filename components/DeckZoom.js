import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Buttons from "./Buttons";
import { blue, white, darkBlue } from "../utils/colors";

class DeckZoom extends Component {
  render() {
    const { deck, questionLength } = this.props.navigation.state.params;
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
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 42,
    color: darkBlue ,
    fontWeight: "bold",
    textAlign: "center"
  },
  subTitle: {
    fontSize: 20
  }
})

export default DeckZoom;

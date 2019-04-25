import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Buttons from "./Buttons";
import { blue, white, darkBlue } from "../utils/colors";
import {connect} from 'react-redux'

class DeckZoom extends Component {
  state = {
    canStart: ""
  };

  startQuiz = () => {
    const { stateQuestionLength } = this.props;
    if (stateQuestionLength === 0) {
      console.log("0")
      this.setState({ canStart: false });
    } else {
      console.log("true")
      this.setState({ canStart: true });
      this.props.navigation.navigate("")
    }
  };
  render() {
    const { stateDeck, stateQuestionLength } = this.props
    const {canStart} = this.state;
    if (stateDeck) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{stateDeck.title}</Text>
          <Text style={styles.subTitle}>
            {stateQuestionLength} {stateQuestionLength === 1 ? "Card" : "Cards"}
          </Text>

          <Buttons
            onPress={() =>
              this.props.navigation.navigate("AddQuestion", {
                stateDeck,
                stateQuestionLength
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

function mapStateToProps(state, {navigation}) {
  const { deck, questionLength } = navigation.state.params;
  const stateDeck = state[deck.id];
  const questions = stateDeck.questions;
  const stateQuestionLength = questions ? stateDeck.questions.length : 0;
  console.log(stateDeck)

  return {
    stateDeck,
    stateQuestionLength
  }

}
export default connect(mapStateToProps)(DeckZoom);

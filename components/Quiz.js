import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import Buttons from "./Buttons";

class Quiz extends Component {
  state = {
    isReady: false,
    isComplete: false
  };

  componentDidMount() {
    const { stateDeck } = this.props;
    const questions = stateDeck.questions;
    let currentQuestionIndex = 0;
    this.setState({
      isReady: true,
      questionLength: questions ? stateDeck.questions.length : 0,
      currentQuestionIndex: currentQuestionIndex,
      currentQuestion: questions[currentQuestionIndex],
      showAnswer: false,
      correct: 0,
      incorrect: 0
    });
  }
  showAnswer = () => {
    this.setState({
      showAnswer: true
    });
  };

  goToNext = () => {
    const { stateDeck } = this.props;
    const questions = stateDeck.questions;
    const { questionLength, currentQuestionIndex } = this.state;

    if (questionLength === currentQuestionIndex + 1) {
      this.setState({
        isComplete: true
      });
    } else {
      this.setState(currState => {
        const newCurrentQuestionIndex = currState.currentQuestionIndex + 1;
        return {
          currentQuestionIndex: newCurrentQuestionIndex,
          currentQuestion: questions[newCurrentQuestionIndex],
          showAnswer: false
        };
      });
    }
  };

  addCorrect = () => {
    this.setState(currState => ({
      correct: currState.correct + 1
    }));

    this.goToNext();
  };
  addIncorrect = () => {
    this.setState(currState => ({
      incorrect: currState.incorrect + 1
    }));
    this.goToNext();
  };
  render() {
    const { stateDeck } = this.props;
    const { isReady, isComplete } = this.state;
    if (stateDeck && isReady && isComplete === false) {
      const {
        questionLength,
        currentQuestionIndex,
        currentQuestion,
        showAnswer,
        correct,
        incorrect
      } = this.state;
      return (
        <View style={styles.container}>
          <Text style={styles.questionHeading}>
            Question {currentQuestionIndex + 1} of {questionLength}
          </Text>

          <Text>
            correct {correct} : {incorrect}
          </Text>

          {showAnswer === false && (
            <View>
              <Text style={styles.QnAText}>{currentQuestion.question}</Text>
              <Buttons onPress={this.showAnswer}>Show Answer</Buttons>
            </View>
          )}
          {showAnswer === true && (
            <View>
              <Text style={styles.QnAText}>{currentQuestion.answer}</Text>
              <Buttons onPress={this.addCorrect}>Correct</Buttons>
              <Buttons onPress={this.addIncorrect}>Incorrect</Buttons>
            </View>
          )}
        </View>
      );
    }

    if (isComplete === true) {
      return (
        <View>
          <Text>Quiz Complete</Text>
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
  container: {},
  questionHeading: {},
  QnAText: {}
});
function mapStateToProps(state, { navigation }) {
  const { stateDeck } = navigation.state.params;
  return {
    stateDeck
  };
}

export default connect(mapStateToProps)(Quiz);

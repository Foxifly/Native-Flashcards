import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Quiz extends Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    const { stateDeck } = this.props;
    const questions = stateDeck.questions;
    let currentQuestionIndex = 0;
    this.setState({
      isReady: true,
      questionLength: questions ? stateDeck.questions.length : 0,
      currentQuestionIndex: currentQuestionIndex,
      currentQuestion: questions[currentQuestionIndex]
    });
  }

  render() {
    const { stateDeck } = this.props;
    const { isReady } = this.state;
    if (stateDeck && isReady) {
      const {
        questionLength,
        currentQuestionIndex,
        currentQuestion
      } = this.state;
      return (
        <View>
          <Text style={styles.questionHeading}>
            Question {currentQuestionIndex + 1} of {questionLength}
          </Text>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <Text style={styles.answerText}>{currentQuestion.answer}</Text>
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
  questionHeading: {},
  questionText: {},
  answerText: {}
});
function mapStateToProps(state, { navigation }) {
  const { stateDeck } = navigation.state.params;
  return {
    stateDeck
  };
}

export default connect(mapStateToProps)(Quiz);

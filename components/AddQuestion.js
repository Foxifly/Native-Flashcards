import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { blue, white, darkBlue } from "../utils/colors";

class AddQuestion extends Component {
  state = {
    question: "",
    answer: "",
    isQBlank: "",
    isABlank: "",
    isSubmit: ""
  };
  handleQChange = text => {
    this.setState({
      question: text.nativeEvent.text
    });
  };
  handleAChange = text => {
    this.setState({
      answer: text.nativeEvent.text
    });
  };
  submitDeck = () => {
    const { question, answer } = this.state;
    question && answer
      ? this.setState({ isSubmit: true })
      : this.setState({ isSubmit: false });

    !question
      ? this.setState({ isQBlank: true })
      : this.setState({ isQBlank: false });

    !answer
      ? this.setState({ isABlank: true })
      : this.setState({ isABlank: false });

    //dispatch add deck

    //navigate to route
  };
  render() {
    const { isSubmit, isABlank, isQBlank } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Add a new question to {"DECKNAME HERE"}
        </Text>
        <TextInput
          maxLength={75}
          onChange={text => this.handleQChange(text)}
          style={styles.input}
          placeholder="Question"
        />
        <Text style={styles.error}>
          {isQBlank === true ? "This field is required" : ""}
        </Text>

        <TextInput
          maxLength={75}
          onChange={text => this.handleAChange(text)}
          style={styles.input}
          placeholder="Answer"
        />
        <Text style={styles.error}>
          {isABlank === true ? "This field is required" : ""}
        </Text>

        <TouchableOpacity style={styles.submitButton} onPress={this.submitDeck}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  input: {
    justifyContent: "center",
    alignSelf: "center",
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10
  },
  submitButton: {
    backgroundColor: blue,
    marginTop: 50,
    width: 100,
    height: 40,
    borderRadius: 5,
    justifyContent: "center"
  },
  submitText: {
    textAlign: "center",
    color: white,
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  titleText: {
    fontSize: 20,
    width: 300,
    marginBottom: 50,
    marginTop: 100,
    textAlign: "center"
  },
  error: {
    color: "red"
  }
});

export default AddQuestion;

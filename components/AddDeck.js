import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
   KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { blue, white, darkBlue } from "../utils/colors";
import Buttons from "./Buttons";
import { saveDeck, generateID } from "../utils/api";
import { addDeck } from "../actions";
import { NavigationActions } from "react-navigation";

class AddDeck extends Component {
  state = {
    text: "",
    isSubmit: "",
    deck: {}
  };
  handleChange = text => {
    this.setState({
      text: text.nativeEvent.text
    });
  };
  submitDeck = () => {
    const { text } = this.state;
    if (!text) {
      this.setState({ isSubmit: false });
    } else {
      this.setState({ isSubmit: true });
      const id = generateID();
      const newDeck = { id, title: this.state.text, questions: [] };
      this.setState({deck: newDeck}, this.toHome(newDeck))

      this.props.dispatch(addDeck(newDeck));

      saveDeck(newDeck);

      this.setState({ text: "" });
      this.textInput.clear();
    }
  };

  toHome = (deck) => {
    const { text} = this.state;
    const questions = deck.questions;
    const questionLength = questions ? deck.questions.length : 0;

    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: "DeckZoom",
        params: { deck, questionLength }
      })
    );
  };

  render() {
    const { isSubmit } = this.state;

    return (
      <KeyboardAvoidingView  behavior="padding" style={styles.container}>
        <Text style={styles.titleText}>Add a new deck to study.</Text>
        <TextInput
          ref={input => {
            this.textInput = input;
          }}
          maxLength={30}
          onChange={text => this.handleChange(text)}
          style={styles.input}
        />

        <Text style={styles.error}>
          {isSubmit === false ? "This field is required" : ""}
        </Text>


        <Buttons onPress={this.submitDeck}>Submit</Buttons>
        </KeyboardAvoidingView>
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

export default connect()(AddDeck);

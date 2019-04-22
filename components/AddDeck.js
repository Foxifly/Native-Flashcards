import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { blue, white, darkBlue } from "../utils/colors";
import Buttons from "./Buttons";

class AddDeck extends Component {
  state = {
    text: "",
    isSubmit: ""
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
    }

    //dispatch add deck

    //navigate to route
  };
  render() {
    const { isSubmit } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Add a new deck to study.</Text>
        <TextInput
          maxLength={30}
          onChange={text => this.handleChange(text)}
          style={styles.input}
        />

        <Text style={styles.error}>
          {" "}
          {isSubmit === false ? "This field is required" : ""}
        </Text>

        <Buttons onPress={this.submitDeck}>Submit</Buttons>
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

import React, { Component } from "react";
import { View, Text, Stylesheet } from "react-native";
import {connect} from 'react-redux';

class AddDeck extends Component {
  hello = () => {
    console.log("HI!")
  }
  render() {
    return (
      <View>
        <Text>AddDeck</Text>
      </View>
    );
  }
}

export default connect()(AddDeck);

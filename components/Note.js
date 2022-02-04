import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Note </Text>
      </View>
    );
  }
}

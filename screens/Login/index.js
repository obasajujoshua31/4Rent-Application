import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../Signup/styles';

export class Login extends Component {
  static navigationOptions = {
    headerTintColor: '#110E94',
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>LOG IN</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholderTextColor="gray"
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('allhouses')}
        >
          <Text style={styles.button}>Let's go</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

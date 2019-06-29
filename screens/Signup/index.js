import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export class Signup extends Component {
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
        <Text style={styles.textHeader}>CREATE ACCOUNT</Text>
        <TextInput
          placeholder="Full name"
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholderTextColor="gray"
        />
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
          onPress={() => this.props.navigation.navigate('profile')}
        >
          <Text style={styles.button}>Let's go</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

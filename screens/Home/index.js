import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Gradient from 'react-native-css-gradient';
import { Text } from 'react-native-paper';
import styles from './styles';
import icon from './asset/4Rent-01.png';

const gradient = `linear-gradient(153.98deg, #5F5DD3 0%, #02007B 63.76%)`;

export class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Gradient gradient={gradient} style={styles.gradient}>
        <View style={styles.container}>
          <TouchableOpacity color="white" style={styles.buttonContainer}>
            <Image source={icon} style={styles.button} />
          </TouchableOpacity>
          <View style={styles.textStylesContainer}>
            <Text
              style={styles.text}
              onPress={() => this.props.navigation.navigate('login')}
            >
              SIGN IN
            </Text>
            <Text
              style={[styles.text, styles.textRight]}
              onPress={() => this.props.navigation.navigate('signup')}
            >
              SIGN UP
            </Text>
          </View>
        </View>
      </Gradient>
    );
  }
}

import React, { Component } from 'react';
import Icon from '@expo/vector-icons/Entypo';
import Gradient from 'react-native-css-gradient';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import image from './assets/Joshua.jpg';

const gradient = `linear-gradient(153.98deg, #5F5DD3 0%, #02007B 63.76%)`;

class Profile extends Component {
  render() {
    return (
      <View style={styles.profileContainer}>
        <Text style={styles.profileTextHeader}>Profile</Text>
        <View style={styles.imagesContainer}>
          <TouchableHighlight style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </TouchableHighlight>
          <TouchableOpacity style={styles.plusButtonContainer}>
            <Text style={styles.plusButton}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.topText}>Obasaju Joshua</Text>
        <Text style={styles.bottomText}>Software Engineer</Text>
        <View style={styles.locationContainer}>
          <Icon name="location-pin" size={18} style={styles.locationIcon} />
          <Text style={styles.locationText}>Lagos, Nigeria</Text>
        </View>
        <View style={styles.viewName}>
          <Text>Full name: </Text>
          <Text style={{ color: '#110E94' }}>Joshua Obasaju</Text>
        </View>
        <View style={[styles.viewName, styles.viewName2]}>
          <Text>Occupation: </Text>
          <Text style={{ color: '#110E94' }}>Software Engineer</Text>
        </View>
        <View style={[styles.viewName, styles.viewName2]}>
          <Text>Email: </Text>
          <Text style={{ color: '#110E94' }}>obasajujoshua31@gmail.com</Text>
        </View>
        <View style={[styles.viewName, styles.viewName2]}>
          <Text>Phone Number: </Text>
          <Text style={{ color: '#110E94' }}>+234905696065</Text>
        </View>
        <View style={[styles.viewName, styles.viewName2]}>
          <Text>Gender: </Text>
          <Text style={{ color: '#110E94' }}>Male</Text>
        </View>
        <Gradient gradient={gradient} style={styles.tochableButton}>
          <Text style={{ color: 'white', alignSelf: 'center' }}>
            Edit profile
          </Text>
        </Gradient>
      </View>
    );
  }
}

export default Profile;

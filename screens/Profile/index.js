import React from 'react';
import { Image, Dimensions } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import styles from './styles';
import image from '../Home/asset/4Rent-01.png';
import Profile from './profile';

const HeaderTitle = <Image style={styles.icon} source={image} />;

const { width } = Dimensions.get('screen');

const ProfileScreen = createStackNavigator({
  profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        height: 40,
      },
      headerLeft: (
        <Icon
          style={styles.imageIcon}
          name="md-menu"
          size={24}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerTitle: HeaderTitle,
    }),
  },
});
export const ProfileDrawer = createDrawerNavigator(
  {
    profile: {
      screen: ProfileScreen,
    },
  },
  {
    // contentComponent: ProfileScreen,
    drawerType: 'slide',
    drawerWidth: 0.5 * width,
  }
);

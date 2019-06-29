import { createAppContainer, createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
import * as screens from './screens';

YellowBox.ignoreWarnings(['Remote debugger']);

const AppNavigator = createStackNavigator({
  home: {
    screen: screens.Home,
  },
  signup: {
    screen: screens.Signup,
  },
  login: {
    screen: screens.Login,
  },
  allhouses: {
    screen: screens.AllHouses,
  },
  profile: {
    screen: screens.ProfileDrawer,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default createAppContainer(AppNavigator);

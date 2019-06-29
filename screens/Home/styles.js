import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    width: 150,
    flexDirection: 'row',
    margin: 15,
    padding: 5,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  button: {
    width: 90,
    padding: 1,
    margin: 5,
    height: 40,
    resizeMode: 'stretch',
  },
  textStylesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    color: 'white',
    fontSize: 14,
    // cursor: 'pointer',
    // margin: 10,
  },
  textRight: {
    borderLeftColor: 'white',
    borderLeftWidth: 1,
  },
});

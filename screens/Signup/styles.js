import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#110E94',
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  textInput: {
    backgroundColor: 'white',
    height: 37,
    width: '80%',
    color: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonContainer: {
    backgroundColor: '#110E94',
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    borderColor: '#336633',
    paddingTop: 4,
    height: 37,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 25,
    width: '80%',
  },
});

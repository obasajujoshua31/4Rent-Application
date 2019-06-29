import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  icon: {
    width: 40,
    height: 17,
    marginLeft: -10,
    resizeMode: 'stretch',
  },

  image: {
    alignSelf: 'center',
    height: 96,
    width: 96,
    borderRadius: 48,
  },
  container: {
    backgroundColor: 'red',
    height: 40,
  },

  imageContainer: {
    shadowColor: '#000',
  },

  profileContainer: {
    alignContent: 'center',
    flex: 1,
  },

  plusButton: {
    fontSize: 24,
    color: '#110E94',
  },

  header: {
    backgroundColor: 'white',
    height: 55,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },

  plusButtonContainer: {
    borderRadius: 12,
    backgroundColor: 'white',
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowColor: '#000',
    elevation: 2,
    position: 'absolute',
    top: 58,
    right: 138,
    zIndex: 1,
  },
  imageIcon: {
    paddingLeft: 10,
    color: '#110E94',
  },

  imagesContainer: {
    position: 'relative',
  },

  profileTextHeader: {
    color: '#110E94',
    marginTop: 15,
    marginBottom: 40,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  topText: {
    marginTop: 16,
    color: '#110E94',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },

  bottomText: {
    marginTop: 4,
    color: 'gray',
    fontSize: 14,
    alignSelf: 'center',
  },

  locationIcon: {
    color: '#110E94',
    alignSelf: 'center',
  },

  locationText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },

  locationContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },

  viewName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    padding: 10,
    marginTop: 18,
    backgroundColor: 'white',
    borderColor: 'gray',
    width: 0.8 * width,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 10,
  },

  viewName2: {
    marginTop: 12,
  },

  tochableButton: {
    backgroundColor: '#110E94',
    alignSelf: 'center',
    borderRadius: 6,
    alignContent: 'center',
    width: 100,
    justifyContent: 'center',
    marginTop: 28,
    padding: 4,
  },
});

import {width, cardBorderRadius} from '../../theme/constants/style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headline: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    color: 'white',
    fontWeight: '700'
  },

  image: {
    height: 64,
    width: 64,
    resizeMode: 'contain'
  },

  headlineContainer: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },

  logoSurface: {
    padding: 20,
    borderRadius: cardBorderRadius
  },

  formContainer: {
    // position: 'absolute',
    // top: '23%',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: width*0.05,
    backgroundColor: 'transparent',
  },

  avoidKeyboard: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },

  surface: {
    borderRadius: cardBorderRadius,
    paddingVertical: 30,
    paddingHorizontal: 20,
    elevation: 4
  }
});

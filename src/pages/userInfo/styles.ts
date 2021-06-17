import {StyleSheet} from 'react-native';
import {width} from '../../theme/constants/style';

export const style = StyleSheet.create({
  fab: {
    backgroundColor: '#65e9f6',
    position: 'absolute',
    right: -5,
    bottom: -5,
  },

  imageContainer: {
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },

  indicatorMarginVertical: {
    marginVertical: 60,
  },

  changePassword: {
    paddingHorizontal: width * 0.05,
    marginTop: 10,
    marginBottom: 50,
  },
});

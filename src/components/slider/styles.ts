import { cardBorderRadius } from './../../theme/constants/style';
import { globalStyles } from './../../styles/global';
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: cardBorderRadius,
    alignItems: 'center',
  },

  swiperArrows: {
    color: globalStyles.orangeBackground.backgroundColor,
    marginHorizontal: 5,
    fontSize: 40,
  },

  activeDots: {
    backgroundColor: globalStyles.orangeBackground.backgroundColor,
  },

  sliderImage: {
      flex: 1, 
      resizeMode: 'cover', 
      width: '100%'
  }
});
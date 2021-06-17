import {Dimensions} from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const gradientColors = ['#f67265', '#f68f65', '#f6ac65'];

export const cardBorderRadius = 25;

export const rippleColor = 'rgba(75, 75, 75, .1)';

export const headerTitleStyle = {
  fontSize: 30,
  lineHeight: 30,
};

export const inputTheme = {
  colors: {
    text: 'black', 
    placeholder: '#777777', 
    disabled: '#c2c2c2'
  },
};

export const headerStyle = {
  elevation: 0,
  shadowOpacity: 0,
  backgroundColor: 'white',
  borderWidth: 0,
  borderBottomColor: 'white',
};

export const orangeHeaderStyle = [
  headerStyle,
  {
    backgroundColor: gradientColors[0],
  },
];

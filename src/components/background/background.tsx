import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { gradientColors } from '../../theme/constants/style';

import {styles} from './styles';

const Background: React.FC = () => {
  return (
    <>
      <LinearGradient
        colors={gradientColors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}
      />
    </>
  );
};

export default Background;

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TouchableRipple} from 'react-native-paper';

import { globalStyles } from '../../styles/global';
import {styles} from './styles';

export default function GradientButton(props) {
  return (
    <>
      <LinearGradient
        colors={props?.colors}
        start={{x: 0, y: 0}}
        style={styles.gradientButton}
        end={{x: 1, y: 0}}>
        <TouchableRipple
          onPress={props?.onPress}
          rippleColor="rgba(0, 0, 0, .32)"
          style={globalStyles.loginButton}>
          <Text style={styles.loginText}>{props?.label}</Text>
        </TouchableRipple>
      </LinearGradient>
    </>
  );
}

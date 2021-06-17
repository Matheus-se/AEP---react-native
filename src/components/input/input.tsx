import React from 'react';
import {TextInput} from 'react-native-paper';
import {inputTheme} from '../../theme/constants/style';

import {styles} from './styles';

export default function Input(props) {
  return (
    <TextInput
      disabled={props?.disabled}
      style={[styles.input, props?.style]}
      outlineColor="white"
      underlineColor="transparent"
      underlineColorAndroid="transparent"
      label={props?.label}
      secureTextEntry={!props?.visible}
      theme={inputTheme}
      value={props?.value}
      render={props?.render}
      multiline={props?.multiline}
      numberOfLines={props?.numberOfLines}
      onChangeText={props?.onChangeText}
      right={
        props?.icon ? (
          <TextInput.Icon
            color="black"
            onPress={props?.onPressIcon}
            style={styles.iconMarginEnd}
            name={props?.visible ? props?.alternativeIcon : props?.icon}
          />
        ) : null
      }
      mode={props?.mode}></TextInput>
  );
}

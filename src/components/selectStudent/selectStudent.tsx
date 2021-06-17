import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import { Headline } from 'react-native-paper';

import { globalStyles } from '../../styles/global';
import { style } from './style';
import { height, width } from '../../theme/constants/style';

export default function SelectStudent() {
  return (
    <View
      style={[
        globalStyles.centralizedContainer,
        {width: width, height: height - 150},
      ]}>
      <LottieView
        resizeMode="contain"
        autoSize
        loop
        autoPlay
        style={{width: width - 30}}
        source={require('../../assets/animations/select.json')}
      />
      <Headline
        style={[
          style.smallPaddingHorizontal,
          style.headline,
          globalStyles.noMarginTop,
        ]}>
        Selecione um aluno no cabeçalho a cima para ver detalhes
      </Headline>
    </View>
  );
}

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {globalStyles} from '../../styles/global';
import LottieView from 'lottie-react-native';
import {height} from '../../theme/constants/style';
import { Headline } from 'react-native-paper';
import { style } from '../presence/styles';

export default function Notifications() {
  return (
    <ScrollView style={globalStyles.scrollContainer}>
      <View style={[globalStyles.alignAnimation, {height: height - 100}]}>
        <Headline style={style.headline}>
          Sshhh... Não tem nada por aqui
        </Headline>
        <LottieView
          resizeMode="contain"
          autoSize
          loop
          autoPlay
          style={{width: 300, marginBottom: 30}}
          source={require('../../assets/animations/bell.json')}
        />
      </View>
    </ScrollView>
  );
}

import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import useAuth from '../contexts/auth';
import {globalStyles} from '../styles/global';
import {ModalProvider} from '../contexts/modal';
import {StudentsProvider} from '../contexts/students';

const Route: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View style={globalStyles.alignAnimation}>
        <LottieView
          resizeMode="contain"
          autoSize
          source={require('../assets/animations/books.json')}
          autoPlay
        />
      </View>
    );
  }

  return signed ? (
    <StudentsProvider>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </StudentsProvider>
  ) : (
    <AuthRoutes />
  );
};

export default Route;

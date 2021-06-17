import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Route from './routes';
import {AuthProvider} from './contexts/auth';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" />
        <AuthProvider>
          <Route />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

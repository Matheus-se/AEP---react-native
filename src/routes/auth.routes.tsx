import React from 'react';
import SignIn from '../pages/login/index';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen component={SignIn} name="SignIn" options={{headerShown: false}}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;

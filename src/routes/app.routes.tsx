import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Avatar, IconButton} from 'react-native-paper';
import {View, TouchableWithoutFeedback} from 'react-native';

import Announcement from '../pages/announcement/index';
import {
  gradientColors,
  headerStyle,
  headerTitleStyle,
  orangeHeaderStyle,
} from '../theme/constants/style';
import Grades from '../pages/grades';
import Presence from '../pages/presence';
import Profile from '../pages/profile';
import UserInfo from '../pages/userInfo';
import useModal from '../contexts/modal';
import ModalScreen from '../components/modalScreen/modalScreen';
import useStudents from '../contexts/students';
import {globalStyles} from '../styles/global';
import {getUserInitials} from '../helpers/getUserInitials';
import Notifications from '../pages/notifications';
import SpeekWithASector from '../pages/speekWithASector';
import NoticeMessage from '../pages/noticeMessage';

const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Avisos';

  return routeName;
}

function TabsRoutes() {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: gradientColors[0],
        style: {
          height: 60,
          elevation: 0,
          shadowOpacity: 0,
          borderWidth: 0,
          borderTopColor: 'white',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Avisos') {
            iconName = focused ? 'megaphone' : 'megaphone-outline';
          } else if (route.name === 'Notas') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Presença') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <AppTab.Screen component={Announcement} name="Avisos"></AppTab.Screen>
      <AppTab.Screen component={Grades} name="Notas"></AppTab.Screen>
      <AppTab.Screen component={Presence} name="Presença"></AppTab.Screen>
      <AppTab.Screen component={Profile} name="Perfil"></AppTab.Screen>
    </AppTab.Navigator>
  );
}

const AppRoutes: React.FC = () => {
  const {visibility, setModalVisibility} = useModal();
  const {students, studentSelected} = useStudents();

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        component={TabsRoutes}
        name="Avisos"
        options={({route, navigation}) => ({
          headerTitle: getHeaderTitle(route),
          headerTitleStyle: headerTitleStyle,
          headerStyle: headerStyle,
          headerRight: () => (
            <View style={globalStyles.centeredRow}>
              <ModalScreen visibility={visibility} students={students} />
              {studentSelected ? (
                studentSelected?.image.length > 0 ? (
                  <TouchableWithoutFeedback
                    onPress={() => setModalVisibility(!visibility)}>
                    <Avatar.Image
                      size={28}
                      source={{uri: studentSelected.image}}
                    />
                  </TouchableWithoutFeedback>
                ) : (
                  <TouchableWithoutFeedback
                    onPress={() => setModalVisibility(!visibility)}>
                    <Avatar.Text
                      size={28}
                      style={globalStyles.orangeBackground}
                      labelStyle={{lineHeight: 20}}
                      color="white"
                      label={getUserInitials(studentSelected.name)}
                    />
                  </TouchableWithoutFeedback>
                )
              ) : (
                <IconButton
                  color={gradientColors[0]}
                  size={28}
                  icon="account-child-outline"
                  onPress={() => setModalVisibility(!visibility)}
                />
              )}
              <IconButton
                color={gradientColors[0]}
                size={28}
                icon="bell-outline"
                onPress={() => navigation.navigate('notifications')}
              />
            </View>
          ),
        })}></AppStack.Screen>
      <AppStack.Screen
        component={UserInfo}
        name="user data"
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Meus dados',
          headerTitleStyle: {fontSize: 20, lineHeight: 20},
          headerTintColor: 'white',
          headerStyle: orangeHeaderStyle,
        }}></AppStack.Screen>
      <AppStack.Screen
        component={Notifications}
        name="notifications"
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Notificações',
          headerTitleStyle: {fontSize: 20, lineHeight: 20},
          headerTintColor: 'white',
          headerStyle: orangeHeaderStyle,
        }}></AppStack.Screen>
        <AppStack.Screen
        component={SpeekWithASector}
        name="speek with a sector"
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Fale com um setor',
          headerTitleStyle: {fontSize: 20, lineHeight: 20},
          headerTintColor: 'white',
          headerStyle: orangeHeaderStyle,
        }}></AppStack.Screen>
        <AppStack.Screen
        component={NoticeMessage}
        name="alert"
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Alerta',
          headerTitleStyle: {fontSize: 20, lineHeight: 20},
          headerTintColor: 'white',
          headerStyle: orangeHeaderStyle,
        }}></AppStack.Screen>
    </AppStack.Navigator>
  );
};

export default AppRoutes;

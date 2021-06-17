import React from 'react';
import {ScrollView} from 'react-native';

import useAuth from '../../contexts/auth';
import {gradientColors, rippleColor} from '../../theme/constants/style';
import {Button, Divider, List} from 'react-native-paper';
import { globalStyles } from '../../styles/global';
import {style} from './styles';
import UserAvatar from '../../components/userAvatar';

export default function Profile({navigation, route}) {
  const {signOut, user} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <ScrollView style={globalStyles.scrollContainer}>
      <List.Section>
        <List.Item
          title={user.name}
          description="Meus Dados"
          rippleColor={rippleColor}
          onPress={() => navigation.navigate('user data')}
          titleStyle={[globalStyles.bold, {marginLeft: 10}]}
          descriptionStyle={{marginLeft: 10}}
          style={style.paddingVertical}
          left={() => <UserAvatar/>}
          right={() => (
            <List.Icon
              style={globalStyles.noMarginRight}
              color={gradientColors[0]}
              icon="chevron-right"
            />
          )}
        />
        <Divider />
        <List.Item
          title="Fale com um setor"
          description="Responsável pedagógico ou professor"
          rippleColor={rippleColor}
          onPress={() => navigation.navigate('speek with a sector')}
          titleStyle={globalStyles.bold}
          style={style.paddingVertical}
          right={() => (
            <List.Icon
              style={globalStyles.noMarginRight}
              color={gradientColors[0]}
              icon="chevron-right"
            />
          )}
        />
        <Divider />
        <List.Item
          title="Dados gerais"
          description="Análise estatistica do aluno"
          rippleColor={rippleColor}
          onPress={() => console.log('press')}
          titleStyle={globalStyles.bold}
          style={style.paddingVertical}
          right={() => (
            <List.Icon
              style={globalStyles.noMarginRight}
              color={gradientColors[0]}
              icon="chevron-right"
            />
          )}
        />
        <Divider />
      </List.Section>
      <Button
        color={gradientColors[0]}
        onPress={() => handleSignOut()}
        contentStyle={style.paddingVertical}>
        SAIR DO APLICATIVO
      </Button>
    </ScrollView>
  );
}

import React, {useState} from 'react';
import {Image, Keyboard, KeyboardAvoidingView, View} from 'react-native';
import {
  Button,
  Headline,
  Surface,
} from 'react-native-paper';

import Background from '../../components/background/background';
import {styles} from './styles';
import useAuth from '../../contexts/auth';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {gradientColors} from '../../theme/constants/style';
import Input from '../../components/input/input';
import GradientButton from '../../components/button/gradientButton';
import { globalStyles } from '../../styles/global';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const {signIn} = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.avoidKeyboard}>
        <Background />
        <KeyboardAvoidingView behavior="height" style={styles.formContainer}>
          <View style={styles.headlineContainer}>
            <Surface style={styles.logoSurface}>
              <Image
                style={styles.image}
                source={require('../../assets/icons/book.png')}
              />
            </Surface>
            <Headline style={styles.headline}>EDUTECH</Headline>
          </View>
          <Surface style={styles.surface}>
            <Input
              label="E-mail"
              value={email}
              visible={true}
              onChangeText={text => setEmail(() => text)}></Input>
            <Input
              label="Senha"
              value={password}
              onChangeText={text => setPassword(() => text)}
              onPressIcon={() => setVisible(prevState => !prevState)}
              visible={visible}
              icon="eye"
              alternativeIcon="eye-off"></Input>
            <GradientButton
              label="LOGIN"
              colors={gradientColors}
              onPress={() => handleSignIn()}/>
            <Button color="black" style={globalStyles.loginButton}>
              Esqueci minha senha
            </Button>
          </Surface>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;

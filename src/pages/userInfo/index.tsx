import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {
  ActivityIndicator,
  Button,
  FAB,
  List,
  Modal,
  Portal,
  Provider,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import GradientButton from '../../components/button/gradientButton';
import Input from '../../components/input/input';

import UserAvatar from '../../components/userAvatar';
import useAuth from '../../contexts/auth';
import {globalStyles} from '../../styles/global';
import {gradientColors, rippleColor, width} from '../../theme/constants/style';
import {style} from './styles';

export default function UserInfo({navigation}) {
  const {user, setUserData} = useAuth();

  const [nome, setNome] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user?.phone);
  const [cpf, setCpf] = useState(
    user?.cpf.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-'),
  );
  const [birth, setBirth] = useState(
    user?.birth.slice(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1'),
  );
  const [userPhoto, setUserPhoto] = useState(user?.image);
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    includeBase64: true,
    maxHeight: 300,
    maxWidth: 300,
    quality: 0.5,
  };

  async function handleGalery() {
    setDisabled(() => true);
    launchImageLibrary(options, res => {
      if (res?.assets?.length) {
        setUserPhoto('data:image/png;base64,' + res?.assets[0]?.base64);
        hideModal();
      }
      setDisabled(() => false);
    });
  }

  function handleCamera() {
    setDisabled(() => true);
    launchCamera({...options, saveToPhotos: true}, res => {
      if (res?.assets?.length) {
        setUserPhoto('data:image/png;base64,' + res?.assets[0]?.base64);
        hideModal();
      }
      setDisabled(() => false);
    });
  }

  function handleUserUpdate() {
    const dateParts = birth.split('/');
    setUserData({
      name: nome,
      email: email,
      phone: phone.match(/\d+/g).join(''),
      cpf: cpf.match(/\d+/g).join(''),
      birth: new Date(
        dateParts[2],
        dateParts[1] - 1,
        dateParts[0],
      ).toISOString(),
      image: userPhoto,
    });
    navigation.navigate({name: 'Perfil', merge: true});
  }

  return (
    <Provider>
      <ScrollView style={globalStyles.scrollContainer}>
        <Text>{disabled}</Text>
        <View style={style.imageContainer}>
          <View style={globalStyles.positionRelative}>
            <UserAvatar source={userPhoto} size={100} />
            <Portal>
              <Modal
                visible={visible}
                dismissable
                style={globalStyles.modal}
                contentContainerStyle={globalStyles.modalContent}
                onDismiss={hideModal}>
                <List.Section>
                  {disabled ? (
                    <ActivityIndicator
                      animating={true}
                      style={style.indicatorMarginVertical}
                      color={gradientColors[0]}
                    />
                  ) : (
                    <>
                      <TouchableRipple
                        disabled={disabled}
                        onPress={() => handleGalery()}
                        rippleColor={rippleColor}>
                        <List.Item
                          titleStyle={globalStyles.blackText}
                          title="Abrir galeria"
                          left={() => (
                            <List.Icon color={gradientColors[0]} icon="image" />
                          )}
                        />
                      </TouchableRipple>
                      <TouchableRipple
                        disabled={disabled}
                        onPress={() => handleCamera()}
                        rippleColor={rippleColor}>
                        <List.Item
                          titleStyle={globalStyles.blackText}
                          title="Tirar uma foto"
                          left={() => (
                            <List.Icon
                              color={gradientColors[0]}
                              icon="camera"
                            />
                          )}
                        />
                      </TouchableRipple>
                    </>
                  )}
                </List.Section>
              </Modal>
            </Portal>
            <FAB
              style={style.fab}
              small
              icon="pencil"
              color="white"
              onPress={() => showModal()}
            />
          </View>
        </View>
        <View style={globalStyles.formContainer}>
          <Input
            label="Nome completo"
            value={nome}
            visible={true}
            onChangeText={text => setNome(() => text)}
          />
          <Input
            label="E-mail"
            value={email}
            visible={true}
            onChangeText={text => setEmail(() => text)}
          />
          <Input
            label="Data de nascimento"
            disabled
            value={birth}
            visible={true}
            onChangeText={text => setBirth(() => text)}
          />
          <Input
            label="Telefone"
            value={phone}
            visible={true}
            render={props => (
              <TextInputMask
                {...props}
                onChangeText={text => setPhone(() => text)}
                mask={'([00]) [0] [0000]-[0000]'}
              />
            )}
          />
          <Input
            label="CPF"
            disabled
            value={cpf}
            visible={true}
            onChangeText={text => setCpf(() => text)}
          />
        </View>
        <View
          style={style.changePassword}>
          <Button color={gradientColors[0]}>Alterar Senha</Button>
          <GradientButton
            onPress={() => handleUserUpdate()}
            colors={gradientColors}
            label="SALVAR"
          />
        </View>
      </ScrollView>
    </Provider>
  );
}

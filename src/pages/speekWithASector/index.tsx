import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, Portal, Dialog, RadioButton} from 'react-native-paper';

import {globalStyles} from '../../styles/global';
import Input from '../../components/input/input';
import {style} from './styles';
import { height } from '../../theme/constants/style';

export default function SpeekWithASector() {
  const [assunto, setAssunto] = useState('');
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState('');
  const [placeHolderValue, setPlaceHolderValue] = useState('');

  const sectors = [
    {name: 'Pedagógico'},
    {name: 'Suporte técnico'},
    {name: 'Disciplinar'},
    {name: 'Direção'},
    {name: 'Outro'},
  ];

  return (
    <ScrollView style={globalStyles.scrollContainer}>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(() => false)}>
          <Dialog.Title>Setores</Dialog.Title>
          <Dialog.Content>
            <ScrollView style={style.maxHeightScrollView}>
              {sectors.map((sector, idx) => (
                  <View key={idx} style={globalStyles.centeredRow}>
                      <RadioButton
                      color={globalStyles.orangeBackground.backgroundColor}
                        value={sector.name}
                        status={placeHolderValue === sector.name ? 'checked' : 'unchecked'}
                        onPress={() => setPlaceHolderValue(sector.name)}
                      />
                      <Text>{sector.name}</Text>
                  </View>
              ))}
            </ScrollView>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => {
                setVisible(() => false);
                setChecked(() => placeHolderValue);
                }} color={globalStyles.orangeBackground.backgroundColor}>
              Selecionar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View
        style={[globalStyles.centralizedContainer, globalStyles.formContainer, {height: height-150}]}>
            <Button
            icon="menu-down"
            style={{width: '100%'}}
            contentStyle={globalStyles.reverseRow}
            color={globalStyles.orangeBackground.backgroundColor}
            onPress={() => setVisible(() => true)}>
            {checked ? checked : 'SETOR'}
          </Button>
        <Input
          label="Assunto"
          value={assunto}
          visible={true}
          onChangeText={text => setAssunto(() => text)}
        />
        <Input
          label="Mensagem"
          value={assunto}
          visible={true}
          style={{
            backgroundColor: 'rgba(231, 231, 231, 0.25)',
            shadowColor: 'transparent',
          }}
          multiline={true}
          numberOfLines={10}
          onChangeText={text => setAssunto(() => text)}
        />
      </View>
    </ScrollView>
  );
}

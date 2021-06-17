import React from 'react';
import {ScrollView} from 'react-native';
import {Portal, Dialog, Button, Checkbox} from 'react-native-paper';
import { globalStyles } from '../../styles/global';
import { style } from './styles';

export default function FilterList(props) {
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={props.onDismiss}>
        <Dialog.Title>Disciplinas</Dialog.Title>
        <Button
          color={globalStyles.orangeBackground.backgroundColor}
          onPress={props.onPress}>
          Selecionar Todos
        </Button>
        <Dialog.Content>
          <ScrollView style={style.maxHeightScrollView}>
            {props.children}
          </ScrollView>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={props.applyFilter}
            color={globalStyles.orangeBackground.backgroundColor}>
            Aplicar Filtro
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

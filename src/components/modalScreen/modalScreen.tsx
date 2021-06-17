import React from 'react';
import {View, Modal} from 'react-native';
import {
  ActivityIndicator,
  Divider,
  Headline,
  IconButton,
  List,
} from 'react-native-paper';
import StudentAvatar from '../../components/studentAvatar/studentAvatar';

import useModal from '../../contexts/modal';
import useStudents from '../../contexts/students';
import {style} from '../../pages/profile/styles';
import {globalStyles} from '../../styles/global';
import {gradientColors, rippleColor} from '../../theme/constants/style';
import styles from './styles';

export default function ModalScreen(props) {
  const {visibility, setModalVisibility} = useModal();
  const {setStudentSelected, loading} = useStudents();

  return (
    <Modal
      animationType="slide"
      visible={props.visibility}
      onRequestClose={() => {
        setModalVisibility(!visibility);
      }}>
      <View style={styles.centeredView}>
        <View
          style={globalStyles.centeredRow}>
          <IconButton
            icon="arrow-left"
            size={28}
            onPress={() => setModalVisibility(false)}
          />
          <Headline>Alunos responsável</Headline>
        </View>
        {loading ? (
          <View style={globalStyles.centralizedContainer}>
            <ActivityIndicator size={40} animating={true} color={gradientColors[0]} />
          </View>
        ) : (
          props.students?.map((student, i) => (
            <View key={i}>
              <List.Item
                title={student.name}
                description={student.period}
                rippleColor={rippleColor}
                onPress={() => {
                  setStudentSelected(student);
                  setModalVisibility(!visibility);
                }}
                titleStyle={[globalStyles.bold, styles.itemMarginEnd]}
                descriptionStyle={styles.itemMarginEnd}
                style={style.paddingVertical}
                left={() => <StudentAvatar student={student} />}
                right={() => (
                  <List.Icon
                    style={globalStyles.noMarginRight}
                    color={gradientColors[0]}
                    icon="chevron-right"
                  />
                )}
              />
              <Divider />
            </View>
          ))
        )}
      </View>
    </Modal>
  );
}

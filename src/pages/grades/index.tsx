import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {
  Caption,
  DataTable,
  Button,
  Checkbox,
  Subheading,
  Title,
  Chip,
  ActivityIndicator,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterList from '../../components/filterList/filterList';

import useStudents from '../../contexts/students';
import {globalStyles} from '../../styles/global';
import SelectStudent from '../../components/selectStudent/selectStudent';
import {style} from './styles';

export default function Grades() {
  const {studentSelected, studentScore} = useStudents();
  const [visibleSubject, setvisibleSubject] = useState(false);
  const [visibleTeacher, setvisibleTeacher] = useState(false);
  const [applyFilterSubject, setApplyFilterSubject] = useState([]);
  const [applyFilterTeacher, setApplyFilterTeacher] = useState([]);
  const [filterBySubject, setFilterBySubject] = useState([]);
  const [filterByTeacher, setFilterByTeacher] = useState([]);

  function addSubjectToFilterList(subject) {
    applyFilterSubject.includes(subject)
      ? setApplyFilterSubject(prevState =>
          prevState.filter(sub => sub != subject),
        )
      : setApplyFilterSubject(prevState => [...prevState, subject]);
  }

  function addTeacherToFilterList(teacher) {
    applyFilterTeacher.includes(teacher)
      ? setApplyFilterTeacher(prevState =>
          prevState.filter(teachr => teachr != teacher),
        )
      : setApplyFilterTeacher(prevState => [...prevState, teacher]);
  }

  function clearFilter() {
    setFilterBySubject(() => []);
    setFilterByTeacher(() => []);
    setApplyFilterSubject(() => []);
    setApplyFilterTeacher(() => []);
  }

  return studentSelected ? (
    studentScore?.length > 0 ? (
      <ScrollView style={globalStyles.scrollContainer}>
        <View
          style={[
            globalStyles.centeredRow,
            {
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              marginBottom: 10,
            },
          ]}>
          <Ionicons
            name="funnel-outline"
            size={25}
            color={globalStyles.orangeBackground.backgroundColor}
          />
          <Button
            compact
            icon="menu-down"
            contentStyle={globalStyles.reverseRow}
            color={globalStyles.orangeBackground.backgroundColor}
            onPress={() => setvisibleSubject(() => true)}>
            Disciplinas
          </Button>
          <Button
            compact
            icon="menu-down"
            contentStyle={globalStyles.reverseRow}
            color={globalStyles.orangeBackground.backgroundColor}
            onPress={() => setvisibleTeacher(() => true)}>
            Educadores
          </Button>
        </View>
        {filterBySubject.length > 0 || filterByTeacher.length > 0 ? (
          <Button color="crimson" onPress={() => clearFilter()}>
            Limpar Filtro
          </Button>
        ) : null}
        {filterBySubject?.length > 0 || filterByTeacher.length > 0 ? (
          <View style={style.filterMargin}>
            <ScrollView horizontal>
              <View style={globalStyles.alignChip}>
                {filterBySubject.map((filterLabel, idx) => (
                  <Chip
                    key={idx}
                    style={style.chipMarginTop}
                    onClose={() => {
                      setFilterBySubject(() =>
                        filterBySubject.filter(sub => sub != filterLabel),
                      );
                      setApplyFilterSubject(() =>
                        applyFilterSubject.filter(sub => sub != filterLabel),
                      );
                    }}>
                    {filterLabel}
                  </Chip>
                ))}
                {filterByTeacher.map((filterLabel, idx) => (
                  <Chip
                    key={idx}
                    style={style.chipMarginTop}
                    onClose={() => {
                      setFilterByTeacher(() =>
                        filterByTeacher.filter(teachr => teachr != filterLabel),
                      );
                      setApplyFilterTeacher(() =>
                        applyFilterTeacher.filter(
                          teachr => teachr != filterLabel,
                        ),
                      );
                    }}>
                    {filterLabel}
                  </Chip>
                ))}
              </View>
            </ScrollView>
          </View>
        ) : null}
        {studentScore.map((subjectScore, i) =>
          filterByTeacher.length > 0 || filterBySubject.length > 0 ? (
            filterBySubject.includes(subjectScore.subject) ||
            filterByTeacher.includes(subjectScore.teacherName) ? (
              <View key={i} style={style.filterMarginTop}>
                <View style={style.alignTableHeader}>
                  <Title style={globalStyles.orangeText}>
                    {subjectScore?.subject}
                  </Title>
                  <Subheading style={globalStyles.orangeText}>
                    {subjectScore?.teacherName}
                  </Subheading>
                </View>
                <DataTable>
                  <DataTable.Header>
                    <Caption style={style.alignTextStartInCell}>
                      Período
                    </Caption>
                    <Caption style={style.alignTextInCell}>Média</Caption>
                  </DataTable.Header>

                  {subjectScore?.scores?.map((score, idx) => (
                    <DataTable.Row key={idx}>
                      <DataTable.Title>{score?.period}</DataTable.Title>
                      <Text
                        style={[
                          style.alignTextInCell,
                          {color: score?.score < 6.0 ? 'crimson' : 'black'},
                        ]}>
                        {(Math.floor(10 * score?.score) / 10).toFixed(1)}
                      </Text>
                    </DataTable.Row>
                  ))}
                </DataTable>
                <DataTable.Row>
                  <Caption style={style.alignTextStartInCell}>Total</Caption>
                  <Text
                    style={[
                      style.alignTextInCell,
                      {
                        color:
                          subjectScore?.scores.reduce(
                            (a, b) => a + b.score,
                            0,
                          ) /
                            subjectScore?.scores?.length <
                          6.0
                            ? 'crimson'
                            : 'black',
                      },
                    ]}>
                    {(
                      Math.floor(
                        (10 *
                          subjectScore?.scores.reduce(
                            (a, b) => a + b.score,
                            0,
                          )) /
                          subjectScore?.scores?.length,
                      ) / 10
                    ).toFixed(1)}
                  </Text>
                </DataTable.Row>
              </View>
            ) : null
          ) : (
            <View key={i} style={style.filterMarginTop}>
              <View style={style.alignTableHeader}>
                <Title style={globalStyles.orangeText}>
                  {subjectScore?.subject}
                </Title>
                <Subheading style={globalStyles.orangeText}>
                  {subjectScore?.teacherName}
                </Subheading>
              </View>
              <DataTable>
                <DataTable.Header>
                  <Caption style={style.alignTextStartInCell}>Período</Caption>
                  <Caption style={style.alignTextInCell}>Média</Caption>
                </DataTable.Header>

                {subjectScore?.scores?.map((score, idx) => (
                  <DataTable.Row key={idx}>
                    <DataTable.Title>{score?.period}</DataTable.Title>
                    <Text
                      style={[
                        style.alignTextInCell,
                        {color: score?.score < 6.0 ? 'crimson' : 'black'},
                      ]}>
                      {(Math.floor(10 * score?.score) / 10).toFixed(1)}
                    </Text>
                  </DataTable.Row>
                ))}
              </DataTable>
              <DataTable.Row>
                <Caption style={style.alignTextStartInCell}>Total</Caption>
                <Text
                  style={[
                    style.alignTextInCell,
                    {
                      color:
                        subjectScore?.scores.reduce((a, b) => a + b.score, 0) /
                          subjectScore?.scores?.length <
                        6.0
                          ? 'crimson'
                          : 'black',
                    },
                  ]}>
                  {(
                    Math.floor(
                      (10 *
                        subjectScore?.scores.reduce((a, b) => a + b.score, 0)) /
                        subjectScore?.scores?.length,
                    ) / 10
                  ).toFixed(1)}
                </Text>
              </DataTable.Row>
            </View>
          ),
        )}
        <FilterList
          visible={visibleSubject}
          onDismiss={() => setvisibleSubject(false)}
          applyFilter={() => {
            setFilterBySubject(() => [...applyFilterSubject]);
            setvisibleSubject(() => false);
          }}
          onPress={() =>
            studentScore.forEach(subject => {
              addSubjectToFilterList(subject.subject);
            })
          }>
          <>
            {studentScore.map((subject, index) => (
              <Checkbox.Item
                key={index}
                onPress={() => addSubjectToFilterList(subject?.subject)}
                label={subject?.subject}
                status={
                  applyFilterSubject.includes(subject?.subject)
                    ? 'checked'
                    : 'unchecked'
                }
              />
            ))}
          </>
        </FilterList>
        <FilterList
          visible={visibleTeacher}
          onDismiss={() => setvisibleTeacher(false)}
          applyFilter={() => {
            setFilterByTeacher(() => [...applyFilterTeacher]);
            setvisibleTeacher(() => false);
          }}
          onPress={() =>
            studentScore.forEach(subject => {
              addTeacherToFilterList(subject.teacherName);
            })
          }>
          <>
            {studentScore.map((subject, indx) => (
              <Checkbox.Item
                key={indx}
                onPress={() => addTeacherToFilterList(subject?.teacherName)}
                label={subject?.teacherName}
                status={
                  applyFilterTeacher.includes(subject?.teacherName)
                    ? 'checked'
                    : 'unchecked'
                }
              />
            ))}
          </>
        </FilterList>
      </ScrollView>
    ) : (
      <View style={[globalStyles.centralizedContainer, globalStyles.whiteBackground]}>
        <ActivityIndicator size={40} animating={true} color={globalStyles.orangeBackground.backgroundColor} />
      </View>
    )
  ) : (
    <ScrollView style={globalStyles.scrollContainer}>
      <SelectStudent />
    </ScrollView>
  );
}

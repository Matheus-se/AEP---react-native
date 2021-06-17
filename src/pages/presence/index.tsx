import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar} from 'react-native-calendars';
import {
  Card,
  Headline,
  IconButton,
  Paragraph,
  Text,
  Title,
} from 'react-native-paper';
import LottieView from 'lottie-react-native';

import {IImportantDates} from '../../models/Idates';
import {globalStyles} from '../../styles/global';
import {gradientColors, height, width} from '../../theme/constants/style';
import useStudents from '../../contexts/students';
import {style} from './styles';
import SelectStudent from '../../components/selectStudent/selectStudent';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábadp',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'fr';

export default function Presence() {
  const [importantDates, setImportantDates] = useState<IImportantDates>(
    {} as IImportantDates,
  );
  const [monthAbsentDays, setMonthAbsentDays] = useState([]);
  const {studentSelected} = useStudents();

  const markedDays = [
    {day: '2021-06-03', type: ['falta']},
    {day: '2021-06-01', type: ['falta', 'prova']},
    {day: '2021-06-04', type: ['prova']},
  ];

  const markedDaysDetails = [
    {
      day: '2021-06-03',
      absences: [
        {
          subjects: 'Matemática',
          teacher: 'Daniela Ferreira',
          computed: 5,
          allowed: 15,
        },
        {
          subjects: 'Educação física',
          teacher: 'Ginchin Funakoshi',
          computed: 1,
          allowed: 8,
        },
      ],
    },
    {
      day: '2021-06-01',
      absences: [
        {
          subjects: 'Ciências',
          teacher: 'Albert Hawking',
          computed: 2,
          allowed: 12,
        },
        {
          subjects: 'Artes',
          teacher: 'Rafael Donnatelo',
          computed: 2,
          allowed: 8,
        },
      ],
      tests: [{subjects: 'Ciências', teacher: 'Albert Hawking', value: 0.7}],
    },
    {
      day: '2021-06-04',
      tests: [
        {subjects: 'Matemática', teacher: 'Daniela Ferreira', value: 0.7},
      ],
    },
  ];

  const filteredMarkedDetails = markedDaysDetails.filter(x => {
    return importantDates?.selectedDay && x.day in importantDates?.selectedDay;
  });

  useEffect(() => {
    let datesobject: object = {};

    const dotsLabels = {
      falta: {key: 'falta', color: 'crimson'},
      prova: {key: 'prova', color: 'aqua'},
    };

    markedDays.map(x => {
      const dotsArray = x.type.map(type => dotsLabels[type]);

      datesobject[x.day] = {
        dots: dotsArray,
      };
    });

    const today = new Date().toISOString().slice(0, 10);

    getMonthAbsentDays(today);
    setImportantDates(prevState => ({...prevState, absentDays: datesobject}));
  }, []);

  function getMonthAbsentDays(month) {
    setMonthAbsentDays(() =>
      markedDays.filter(x => {
        return (
          x.type.indexOf('falta') !== -1 &&
          month?.slice(0, 8) == x?.day?.slice(0, 8)
        );
      }),
    );
  }

  function parseSelectedDate(day) {
    let selectedObject = {};

    selectedObject[day?.dateString] = {
      selected: true,
      selectedColor: gradientColors[0],
    };

    setImportantDates(prevState => ({
      ...prevState,
      selectedDay: selectedObject,
    }));
  }

  return studentSelected ? (
    <ScrollView style={globalStyles.scrollContainer}>
      <View>
        <View
          style={[
            style.smallMarginEnd,
            globalStyles.centeredRow,
            globalStyles.spaceBetween,
          ]}>
          <View style={globalStyles.row}>
            <View style={globalStyles.centeredRow}>
              <IconButton
                icon="checkbox-blank-circle"
                size={20}
                color="crimson"
              />
              <Text>Faltas</Text>
            </View>
            <View style={globalStyles.centeredRow}>
              <IconButton icon="checkbox-blank-circle" size={20} color="aqua" />
              <Text>Provas</Text>
            </View>
          </View>
          <Text>Faltas no mês: {monthAbsentDays.length}</Text>
        </View>
        <Calendar
          markingType={'multi-dot'}
          displayLoadingIndicator
          onMonthChange={month => getMonthAbsentDays(month.dateString)}
          markedDates={{
            ...importantDates.absentDays,
            ...importantDates.selectedDay,
          }}
          theme={{
            todayTextColor: gradientColors[0],
            arrowColor: gradientColors[0],
            monthTextColor: gradientColors[0],
          }}
          onDayPress={day => parseSelectedDate(day)}
          maxDate={new Date()}
          hideExtraDays={true}
        />
        {importantDates?.selectedDay ? (
          <View>
            {filteredMarkedDetails.length > 0 ? (
              <View style={style.cardMarginTop}>
                {filteredMarkedDetails.map((x, i) =>
                  x.tests ? (
                    <View key={i}>
                      {x.tests.map((test, index) => (
                        <Card key={index} style={style.testsCard}>
                          <Card.Content style={style.cardContent}>
                            <View>
                              <Title
                                numberOfLines={1}
                                style={[
                                  globalStyles.textNowrap,
                                  globalStyles.whiteText,
                                ]}>
                                Prova de {test.subjects}
                              </Title>
                              <Paragraph style={globalStyles.whiteText}>
                                Valor: {(test.value * 10).toFixed(1)}
                              </Paragraph>
                            </View>
                            <View>
                              <Paragraph
                                numberOfLines={1}
                                style={style.teacherName}>
                                {test.teacher}
                              </Paragraph>
                            </View>
                          </Card.Content>
                        </Card>
                      ))}
                    </View>
                  ) : null,
                )}
                {filteredMarkedDetails.map((x, idx) =>
                  x.absences ? (
                    <View key={idx} style={{marginBottom: 20}}>
                      {x.absences.map((absense, indx) => (
                        <Card key={indx} style={style.absencesCard}>
                          <Card.Content style={style.cardContent}>
                            <View>
                              <Title
                                style={[
                                  globalStyles.whiteText,
                                  globalStyles.textNowrap,
                                ]}
                                numberOfLines={1}>
                                Falta em {absense.subjects}
                              </Title>
                              <Paragraph style={globalStyles.whiteText}>
                                computadas/permitidas: {absense.computed}/
                                {absense.allowed}
                              </Paragraph>
                            </View>
                            <View>
                              <Paragraph
                                numberOfLines={1}
                                style={style.teacherName}>
                                {absense.teacher}
                              </Paragraph>
                            </View>
                          </Card.Content>
                        </Card>
                      ))}
                    </View>
                  ) : null,
                )}
              </View>
            ) : (
              <View style={globalStyles.alignAnimation}>
                <Headline style={style.headline}>
                  Sshhh... Não tem nada por aqui,{'\n'}tente outra data
                </Headline>
                <LottieView
                  resizeMode="contain"
                  autoSize
                  loop
                  autoPlay
                  style={{width: 300, marginBottom: 30}}
                  source={require('../../assets/animations/nothingHere.json')}
                />
              </View>
            )}
          </View>
        ) : (
          <View style={globalStyles.alignAnimation}>
            <Headline style={style.headline}>
              Selecione uma data para ver detalhes
            </Headline>
            <LottieView
              resizeMode="contain"
              autoSize
              loop
              autoPlay
              style={{width: 300, marginTop: -30}}
              source={require('../../assets/animations/dates.json')}
            />
          </View>
        )}
      </View>
    </ScrollView>
  ) : (
    <ScrollView style={globalStyles.scrollContainer}>
      <SelectStudent />
    </ScrollView>
  );
}

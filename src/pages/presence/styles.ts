import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  smallMarginEnd: {
    paddingRight: 10,
  },

  cardMarginTop: {
    marginTop: 25,
  },

  testsCard: {
    elevation: 4,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: 'aqua',
    borderColor: 'aqua',
    shadowColor: 'aqua',
  },

  headline: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    lineHeight: 21,
  },

  smallPaddingHorizontal: {
    paddingHorizontal: 10,
  },

  absencesCard: {
    elevation: 4,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: 'crimson',
    borderColor: 'crimson',
    shadowColor: 'crimson',
  },

  cardContent: {
    paddingLeft: 0,
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  teacherName: {
    textAlign: 'right',
    flex: 1,
    color: 'white',
  },
});

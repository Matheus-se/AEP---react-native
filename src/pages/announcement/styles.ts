import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  cardMargin: {
    paddingVertical: 15,
    marginVertical: 5,
  },

  cardContainerMargin: {
    marginHorizontal: 10,
  },

  cardContainerHeight: {
    height: 400,
  },

  cardContainerSpacement: {
    marginBottom: 30,
  },

  fab: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'crimson',
    borderRadius: 0,
    zIndex: 1000,
  }
});

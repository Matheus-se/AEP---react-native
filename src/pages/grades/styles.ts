import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  alignTextInCell: {
    textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
  },

  alignTableHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },

  alignTextStartInCell: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'left',
  },

  filterMargin: {
    marginHorizontal: 15,
    marginBottom: 10,
  },

  chipMarginTop: {
    marginRight: 10,
  },

  filterMarginTop: {
    marginTop: 20,
  },
});

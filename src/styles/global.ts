import { width } from './../theme/constants/style';
import {StyleSheet, Modal} from 'react-native';

import {gradientColors} from '../theme/constants/style';

export const globalStyles = StyleSheet.create({
  loginButton: {
    borderRadius: 40,
    padding: 20,
  },

  orangeText: {
    color: gradientColors[0]
  },

  scrollContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 10,
  },

  bold: {
    fontWeight: 'bold',
  },

  reverseRow: {
    flexDirection: 'row-reverse'
  },

  noMarginRight: {
    marginRight: 0,
  },

  overflowHidden: {
    overflow: 'hidden',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  textRight: {
    textAlign: 'right',
  },

  centralizedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noMarginTop: {
    marginTop: 0,
  },

  modal: {
    padding: 0,
    justifyContent: 'flex-end',
  },

  alignChip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  modalContent: {
    backgroundColor: 'white',
    zIndex: 1000,
  },

  whiteText: {
    color: 'white',
  },

  blackText: {
    color: 'black',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
  },

  centeredRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  orangeBackground: {
    backgroundColor: gradientColors[0],
  },

  alignAnimation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  positionRelative: {
    position: 'relative',
  },

  whiteBackground: {
    backgroundColor: 'white',
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: width * 0.05,
  },

  textNowrap: {
    flex: 1,
  },
});

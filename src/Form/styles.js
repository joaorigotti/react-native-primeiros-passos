import { StyleSheet } from 'react-native';
import * as cs from '../CommonStyles';

const input = {
  height: 40,
  borderLeftWidth: 2,
  borderLeftColor: cs.COLOR.gray70,
  borderBottomWidth: 1,
  borderBottomColor: cs.COLOR.lightGray,
  fontFamily: cs.MAIN_FONT,
  fontSize: 12,
  paddingLeft: cs.BASE_PADDING,
  marginTop: cs.BASE_MARGING,
};

const calculateSpace = (value) => value * 4;

export default () => StyleSheet.create({
  container: {
    width: cs.SCREEN_WIDTH,
    paddingLeft: calculateSpace(cs.BASE_PADDING),
    paddingRight: calculateSpace(cs.BASE_PADDING),
    marginTop: calculateSpace(cs.BASE_MARGING),
    marginBottom: calculateSpace(cs.BASE_MARGING),
  },

  input,

  inputMultiline: Object.assign({}, input, { 
    marginTop: 0,
    height: 120,
  }),

  submitContainer: {
    width: 80,
    alignSelf: 'flex-end'
  },

  submit: {
    fontFamily: cs.MAIN_FONT,
    fontSize: 18,
    color: cs.COLOR.gray30,
    marginTop: cs.BASE_MARGING,
    alignSelf: 'flex-end'
  }
});
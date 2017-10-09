import { StyleSheet } from 'react-native';
import * as cs from '../CommonStyles';

const padTop = cs.BASE_PADDING * 4;
const padBottom = cs.BASE_PADDING + 5;

export default () => StyleSheet.create({
  container: {
    width: cs.SCREEN_WIDTH,
    paddingLeft: padTop,
    paddingRight: padTop,
    paddingTop: padBottom,
    paddingBottom: padBottom,
  },

  review: {
    fontFamily: cs.MAIN_FONT,
    fontSize: 14,
    color: cs.COLOR.gray30,
    marginTop: cs.BASE_MARGING - 5,
  }
});
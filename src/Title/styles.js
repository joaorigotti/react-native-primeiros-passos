import { StyleSheet } from 'react-native';
import * as cs from '../CommonStyles';

export default ({size, bold, color}) => {
  return StyleSheet.create({
    title: {
      fontFamily: cs.MAIN_FONT,
      fontSize: size,
      fontWeight: bold ? 'bold' : 'normal',
      color: color || cs.COLOR.gray30,
    },
  });
};
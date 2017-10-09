import { StyleSheet } from 'react-native';
import * as cs from '../CommonStyles';

export default ({ width, color }) => {
  const margin = cs.BASE_MARGING - 5;

  return StyleSheet.create({
    separator: {
      width: width || cs.SCREEN_WIDTH,
      height: 1,
      backgroundColor: color,
      marginTop: margin,
      marginBottom: margin,
    },
  });
}
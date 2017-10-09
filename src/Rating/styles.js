import { StyleSheet } from 'react-native';
import * as cs from '../CommonStyles';

export default () => StyleSheet.create({
  container: {
    width: cs.SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  ratingContainer: {
    width: cs.SCREEN_WIDTH / 3,
    alignItems: 'center'
  },

  rating: {
    color: cs.COLOR.gray30,
    fontFamily: cs.MAIN_FONT,
    fontSize: 56,
    fontWeight: 'bold',
  },
});
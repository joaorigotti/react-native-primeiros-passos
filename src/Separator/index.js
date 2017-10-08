import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { getWidth } from '../Utils';

const style = ({ width, color}) => {
  return StyleSheet.create({
    separator: {
      width: width || getWidth(),
      height: 1,
      backgroundColor: color,
      marginTop: 5,
      marginBottom: 5,
    },
  });
}

const Separator = props => {
  const _props = {
    width: props.width,
    color: props.color,
  };
  const styles = style(_props);
  
  return <View style={styles.separator} />;
}

export default Separator
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { getWidth } from '../Utils';

const style = ({size, bold, color}) => {
  return StyleSheet.create({
    title: {
      fontFamily: 'RobotoSlab-Regular',
      fontSize: size,
      fontWeight: bold ? 'bold' : 'normal',
      color: color || '#4d4d4d',
    },
  });
};

const Photo = props => {
  const _props = {
    size: props.size,
    bold: props.bold,
    color: props.color,
  };
  const styles = style(_props);

  return <Text style={styles.title}>{props.children}</Text>;
}

export default Photo

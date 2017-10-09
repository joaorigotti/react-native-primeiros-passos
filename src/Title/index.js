import React from 'react';
import { Text } from 'react-native';
import stylesheet from './styles';

const Photo = props => {
  const _props = {
    size: props.size,
    bold: props.bold,
    color: props.color,
  };
  const styles = stylesheet(_props);

  return <Text style={styles.title}>{props.children}</Text>;
}

export default Photo

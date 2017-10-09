import React from 'react';
import { View } from 'react-native';
import stylesheet from './styles';

const Separator = props => {
  const _props = {
    width: props.width,
    color: props.color,
  };
  const styles = stylesheet(_props);
  
  return <View style={styles.separator} />;
}

export default Separator
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Title from '../Title';
import stylesheet from './styles';

const styles = stylesheet();
const Review = props => {
  return (
    <View>
      <View style={styles.container}>
        <Title size={16} bold>{props.name}</Title>
        <Text style={styles.review}>{props.text}</Text>
      </View>
    </View>
  );
}

export default Review
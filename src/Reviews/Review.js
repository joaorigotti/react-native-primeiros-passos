import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { getWidth } from '../Utils';
import Title from '../Title';

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

const styles = StyleSheet.create({
  container: {
    width: getWidth(),
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },

  review: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 14,
    color: '#4d4d4d',
    marginTop: 5,
  }
});

export default Review
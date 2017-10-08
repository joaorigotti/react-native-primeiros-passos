import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { getWidth } from '../Utils';

const Photo = props => <Image style={styles.photo} source={{ uri: props.url }} />;

const styles = StyleSheet.create({
  photo: {
    width: getWidth(),
    height: getWidth(),
    backgroundColor: '#eee'
  }
});

export default Photo
import React from 'react';
import { Image } from 'react-native';
import stylesheet from './styles';

const styles = stylesheet();
const Photo = props => <Image style={styles.photo} source={{ uri: props.url }} />;

export default Photo
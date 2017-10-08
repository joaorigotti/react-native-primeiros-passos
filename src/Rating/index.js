import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { getWidth } from '../Utils';
import Title from '../Title';
import Separator from '../Separator';
import { increment, decrement } from '../Business';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: props.defaultValue };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    let newRating = increment(this.state.rating);
    this.setState(() => ({ rating: parseInt(newRating) }));
  }

  decrement() {
    let newRating = decrement(this.state.rating);
    this.setState(() => ({ rating: parseInt(newRating) }));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.decrement}>
          <Image source={require('../../assets/images/minus.png')} />
        </TouchableOpacity>

        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{this.state.rating}</Text>
          <Separator width={160} color="#8cc63f" />
          <Title color="#808080" size={16}>Rating</Title>
        </View>

        <TouchableOpacity onPress={this.increment}>
          <Image source={require('../../assets/images/plus.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: getWidth(),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  ratingContainer: {
    width: getWidth() / 3,
    alignItems: 'center'
  },

  rating: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 56,
    fontWeight: 'bold',
    color: '#4d4d4d',
  },
});

export default Rating
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Title from '../Title';
import Separator from '../Separator';
import { increment, decrement } from '../Business';
import stylesheet from './styles';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: props.defaultValue };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.styles = stylesheet();
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
      <View style={this.styles.container}>
        <TouchableOpacity onPress={this.decrement}>
          <Image source={require('../../assets/images/minus.png')} />
        </TouchableOpacity>

        <View style={this.styles.ratingContainer}>
          <Text style={this.styles.rating}>{this.state.rating}</Text>
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

export default Rating
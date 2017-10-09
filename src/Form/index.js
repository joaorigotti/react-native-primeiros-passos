import React, { Component } from 'react';
import { 
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Title from '../Title';
import stylesheet from './styles';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      review: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.styles = stylesheet();
  }

  _resetForm() {
    this.setState(() => ({ name: '', review: ''}));
  }

  handleSubmit() {
    const review = {
      name: this.state.name,
      review: this.state.review,
    };

    if (review.name !== '' && review.review !== '') {
      this.props.action(review, this.props.productId);
      this._resetForm();
    }
    
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Title size={21}>Deixe sua review</Title>
        <TextInput
          style={this.styles.input}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder="nome"
          underlineColorAndroid="transparent"
        />
        <TextInput
          multiline={true}
          style={this.styles.inputMultiline}
          onChangeText={(review) => this.setState({review})}
          value={this.state.review}
          placeholder="review"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress={this.handleSubmit} style={this.styles.submitContainer}>
          <Text style={this.styles.submit}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form
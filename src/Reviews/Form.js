import React, { Component } from 'react';
import { 
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { getWidth } from '../Utils';
import Title from '../Title';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      review: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <View style={styles.container}>
        <Title size={21}>Deixe sua review</Title>
        <TextInput
          style={styles.input}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder="nome"
          underlineColorAndroid="transparent"
        />
        <TextInput
          multiline={true}
          style={styles.inputMultiline}
          onChangeText={(review) => this.setState({review})}
          value={this.state.review}
          placeholder="review"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress={this.handleSubmit} style={styles.submitContainer}>
          <Text style={styles.submit}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const input = {
  height: 40,
  borderLeftWidth: 2,
  borderLeftColor: '#b3b3b3',
  borderBottomWidth: 1,
  borderBottomColor: '#e6e6e6',
  fontFamily: 'RobotoSlab-Regular',
  fontSize: 12,
  paddingLeft: 5,
  marginTop: 10,
};

const styles = StyleSheet.create({
  container: {
    width: getWidth(),
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
    marginBottom: 40,
  },

  input,

  inputMultiline: Object.assign({}, input, { 
    marginTop: 0,
    height: 120,
  }),

  submitContainer: {
    width: 80,
    alignSelf: 'flex-end'
  },

  submit: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 18,
    color: '#4d4d4d',
    marginTop: 10,
    alignSelf: 'flex-end'
  }
});

export default Form
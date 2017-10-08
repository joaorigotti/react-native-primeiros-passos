import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import Photo from './Photo';
import Rating from './Rating';
import Reviews from './Reviews';
import { getProducts } from './Services';

class AvaliometroMobile extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.newReview = this.newReview.bind(this);
  }

  componentWillMount() {
    const products = getProducts();
    this.setState(() => ({ products }))
  }

  newReview(review, productId) {
    let products = [...this.state.products];

    products.forEach(item => {
      if(item.id === productId) {
        review.id = item.reviews.length + 1;
        item.reviews.push(review);
      }
    });

    this.setState(() => ({ products }));
  }

  render() {
    return (
      <FlatList
        data={this.state.products}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) => (
            <View>
              <Photo url={item.picture_url} />
              <Rating defaultValue={item.average_rating}/>
              <Reviews 
                value={item.reviews} 
                form={{ 
                  productId: item.id, 
                  action: this.newReview
                }} 
              />
            </View>
          )
        }
      />
    );
  }
}

export default () => AppRegistry.registerComponent('AvaliometroMobile', () => AvaliometroMobile)

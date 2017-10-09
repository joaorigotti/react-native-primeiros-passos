import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import Review from '../Review';
import Form from '../Form';
import Separator from '../Separator';

const Reviews = props => {
  const { productId, action } = props.form;

  return (
    <View>
      {/* <FlatList
        data={props.value}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) => <Review name={item.name} text={item.review} />
        }
      /> */}
      {
        props.value.map(item => {
          return <Review key={item.id} name={item.name} text={item.review} />
        })
      }
      <Form productId={productId} action={action} />
    </View>
  );
}

export default Reviews

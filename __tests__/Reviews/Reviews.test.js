import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../../src/Reviews';
import Review from '../../src/Review';
import Form from '../../src/Form';

describe('<Reviews />', () => {
  const state = {};

  state.reviews = [
    {
      id: 1,
      name: 'name',
      review: 'review'
    },

    {
      id: 2,
      name: 'name',
      review: 'review'
    }
  ];

  state.form = {
    productId: 1,
    action: jest.fn()
  }
  
  const wrapper = shallow(<Reviews value={state.reviews} form={state.form} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains two <Review /> component', () => {
    expect(wrapper.containsMatchingElement(<Review />)).toEqual(true);
    expect(wrapper.find(Review).length).toBe(2)
  });

  it('contains one <Form /> component', () => {
    expect(wrapper.containsMatchingElement(<Form />)).toEqual(true);
    expect(wrapper.find(Form).length).toBe(1)
  });
});

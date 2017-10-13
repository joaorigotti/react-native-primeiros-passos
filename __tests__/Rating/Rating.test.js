import React from 'react';
import { shallow } from 'enzyme';
import Rating from '../../src/Rating';

describe('<Rating />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Rating />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
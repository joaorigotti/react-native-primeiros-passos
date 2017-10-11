import React from 'react';
import { shallow } from 'enzyme';
import Review from '../src/Review';

describe('<Review />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Review />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../src/Reviews';

describe('<Reviews />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Reviews value={[]} form={{productId:1,action: ()=>{}}} />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
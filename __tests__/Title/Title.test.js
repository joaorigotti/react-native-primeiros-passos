import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../src/Title';

describe('<Title />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Title />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
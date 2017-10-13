import React from 'react';
import { shallow } from 'enzyme';
import Photo from '../../src/Photo';

describe('<Photo />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Photo />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
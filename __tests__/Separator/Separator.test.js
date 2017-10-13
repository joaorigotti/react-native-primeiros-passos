import React from 'react';
import { shallow } from 'enzyme';
import Separator from '../../src/Separator';

describe('<Separator />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Separator />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
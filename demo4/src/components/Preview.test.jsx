import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview';

it('renders without crashing', () => {
    const component = shallow(<Preview content="" />);
    expect(component.length).toBe(1);
});
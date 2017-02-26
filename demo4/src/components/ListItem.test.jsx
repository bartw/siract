import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../models/Slide';
import ListItem from './ListItem';

it('renders without crashing', () => {
    const onSelect = () => {};
    const component = shallow(<ListItem slide={new Slide()} onSelect={onSelect} />);
    expect(component.length).toBe(1);
});
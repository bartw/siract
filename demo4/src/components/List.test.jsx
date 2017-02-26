import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

it('renders without crashing', () => {
    const onSelect = () => {};
    const component = shallow(<List slides={[]} onSelect={onSelect} />);
    expect(component.length).toBe(1);
});
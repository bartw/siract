import React from 'react';
import { shallow } from 'enzyme';
import Edit from './Edit';

it('renders without crashing', () => {
    const onRemove = () => {};
    const onUpdate = () => {};
    const component = shallow(<Edit content="" onRemove={onRemove} onUpdate={onUpdate} />);
    expect(component.length).toBe(1);
});
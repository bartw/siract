import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

it('renders without crashing', () => {
    const onSelect = () => {};
    const onImport = () => {};
    const onAdd = () => {};
    const onStart = () => {};
    const component = shallow(<Sidebar slides={[]} onSelect={onSelect} onImport={onImport} onAdd={onAdd} onStart={onStart} />);
    expect(component.length).toBe(1);
});
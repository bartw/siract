import React from 'react';
import { shallow } from 'enzyme';
import SidebarButtons from './SidebarButtons';

it('renders without crashing', () => {
    const onImport = () => {};
    const onAdd = () => {};
    const onStart = () => {};
    const component = shallow(<SidebarButtons onImport={onImport} onAdd={onAdd} onStart={onStart} />);
    expect(component.length).toBe(1);
});
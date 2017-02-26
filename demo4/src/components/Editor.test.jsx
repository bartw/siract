import React from 'react';
import { shallow } from 'enzyme';
import Editor from './Editor';

it('renders without crashing', () => {
    const onSelect = () => {};
    const onRemove = () => {};
    const onUpdate = () => {};
    const onImport = () => {};
    const onAdd = () => {};
    const onStart = () => {};
    const component = shallow(<Editor slides={[]} onSelect={onSelect} onRemove={onRemove} onUpdate={onUpdate} onImport={onImport} onAdd={onAdd} onStart={onStart} />);
    expect(component.length).toBe(1);
});
import React from 'react';
import { shallow } from 'enzyme';
import Import from './Import';

it('renders without crashing', () => {
    const onImport = () => {};
    const onHide = () => {};
    const component = shallow(<Import onImport={onImport} onHide={onHide} />);
    expect(component.length).toBe(1);
});
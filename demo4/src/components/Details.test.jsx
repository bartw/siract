import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details';

it('renders without crashing', () => {
    const onRemove = () => {};
    const onUpdate = () => {};
    const component = shallow(<Details content="" onRemove={onRemove} onUpdate={onUpdate} />);
    expect(component.length).toBe(1);
});
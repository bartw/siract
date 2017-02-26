import React from 'react';
import { shallow } from 'enzyme';
import Presentation from './Presentation';

it('renders without crashing', () => {
    const onStop = () => {};
    const component = shallow(<Presentation slides={[]} onStop={onStop} />);
    expect(component.length).toBe(1);
});
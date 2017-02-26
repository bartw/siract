import React from 'react';
import { render } from 'react-dom';
import Presentation from './Presentation';

it('renders without crashing', () => {
    const onStop = () => {};
    const div = document.createElement('div');
    render(<Presentation slides={[]} onStop={onStop} />, div);
});
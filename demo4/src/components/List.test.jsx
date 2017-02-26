import React from 'react';
import { render } from 'react-dom';
import List from './List';

it('renders without crashing', () => {
    const onSelect = () => {};
    const div = document.createElement('div');
    render(<List slides={[]} onSelect={onSelect} />, div);
});
import React from 'react';
import { render } from 'react-dom';
import Preview from './Preview';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Preview content="" />, div);
});
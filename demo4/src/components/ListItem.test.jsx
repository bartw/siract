import React from 'react';
import { render } from 'react-dom';
import Slide from '../models/Slide';
import ListItem from './ListItem';

it('renders without crashing', () => {
    const onSelect = () => {};
    const div = document.createElement('div');
    render(<ListItem slide={new Slide()} onSelect={onSelect} />, div);
});
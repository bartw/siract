import React from 'react';
import { render } from 'react-dom';
import Sidebar from './Sidebar';

it('renders without crashing', () => {
    const onSelect = () => {};
    const onImport = () => {};
    const onAdd = () => {};
    const onStart = () => {};
    const div = document.createElement('div');
    render(<Sidebar slides={[]} onSelect={onSelect} onImport={onImport} onAdd={onAdd} onStart={onStart} />, div);
});
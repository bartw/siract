import React from 'react';
import { render } from 'react-dom';
import SidebarButtons from './SidebarButtons';

it('renders without crashing', () => {
    const onImport = () => {};
    const onAdd = () => {};
    const onStart = () => {};
    const div = document.createElement('div');
    render(<SidebarButtons onImport={onImport} onAdd={onAdd} onStart={onStart} />, div);
});
import React from 'react';
import { render } from 'react-dom';
import Import from './Import';

it('renders without crashing', () => {
    const onImport = () => {};
    const onHide = () => {};
    const div = document.createElement('div');
    render(<Import onImport={onImport} onHide={onHide} />, div);
});
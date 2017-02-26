import React from 'react';
import { render } from 'react-dom';
import Edit from './Edit';

it('renders without crashing', () => {
    const onRemove = () => {};
    const onUpdate = () => {};
    const div = document.createElement('div');
    render(<Edit content="" onRemove={onRemove} onUpdate={onUpdate} />, div);
});
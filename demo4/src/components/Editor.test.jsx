import React from 'react';
import { render } from 'react-dom';
import Editor from './Editor';

it('renders without crashing', () => {
    const onSelect = () => {};
    const onRemove = () => {};
    const onUpdate = () => {};
    const onImport = () => {};
    const onAdd = () => {};
    const onStart = () => {};
    const div = document.createElement('div');
    render(<Editor slides={[]} onSelect={onSelect} onRemove={onRemove} onUpdate={onUpdate} onImport={onImport} onAdd={onAdd} onStart={onStart} />, div);
});
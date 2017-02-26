import React from 'react';
import { render } from 'react-dom';
import Details from './Details';

it('renders without crashing', () => {
    const onRemove = () => {};
    const onUpdate = () => {};
    const div = document.createElement('div');
    render(<Details content="" onRemove={onRemove} onUpdate={onUpdate} />, div);
});
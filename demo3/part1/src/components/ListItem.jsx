import React from 'react';
import Preview from './Preview';

export default class ListItem extends React.Component {
    render() {
        return (
            <li className="list-item">
                <Preview slide={this.props.slide} />
            </li>
        );
    }
}
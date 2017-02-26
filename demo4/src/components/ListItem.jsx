import React from 'react';
import Preview from './Preview';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
    }

    click() {
        this.props.onSelect(this.props.slide.id);
    }

    render() {
        return (
            <li className="list-item" onClick={this.click}>
                <Preview content={this.props.slide.content} />
            </li>
        );
    }
}
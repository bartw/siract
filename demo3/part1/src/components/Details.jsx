import React from 'react';
import Preview from './Preview';
import Edit from './Edit';

export default class Details extends React.Component {
    render() {
        return (
            <div id="details-container">
                <div id="details">
                    <div id="details-preview">
                        <Preview slide={this.props.slide} />
                    </div>
                    <Edit slide={this.props.slide} />
                </div>
            </div>
        );
    }
}
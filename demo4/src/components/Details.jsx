import React from 'react';
import Preview from './Preview';
import Edit from './Edit';

export default class Details extends React.Component {
    render() {
        return (
            <div id="details-container">
                <div id="details">
                    <div id="details-preview">
                        <Preview content={this.props.content} />
                    </div>
                    <Edit content={this.props.content} onRemove={this.props.onRemove} onUpdate={this.props.onUpdate} />
                </div>
            </div>
        );
    }
}

Details.propTypes = {
    content: React.PropTypes.string.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    onUpdate: React.PropTypes.func.isRequired
};
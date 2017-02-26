import React from 'react';
import Sidebar from './Sidebar';
import Details from './Details';

export default class Editor extends React.Component {
    render() {
        return (
            <div id="editor">
                <Sidebar slides={this.props.slides} onAdd={this.props.onAdd} onSelect={this.props.onSelect} onStart={this.props.onStart} onImport={this.props.onImport} />
                {this.props.content && <Details content={this.props.content} onRemove={this.props.onRemove} onUpdate={this.props.onUpdate} />}
            </div>
        );
    }
}

Editor.propTypes = {
    content: React.PropTypes.string,
    onRemove: React.PropTypes.func.isRequired,
    onUpdate: React.PropTypes.func.isRequired
};
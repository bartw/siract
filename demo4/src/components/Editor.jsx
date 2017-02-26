import React from 'react';
import Sidebar from './Sidebar';
import Details from './Details';

export default class Editor extends React.Component {
    render() {
        return (
            <div id="editor">
                <Sidebar slides={this.props.slides} onAdd={this.props.onAdd} onSelect={this.props.onSelect} onStart={this.props.onStart} onImport={this.props.onImport} />
                <Details slide={this.props.slide} onRemove={this.props.onRemove} onUpdate={this.props.onUpdate} />
            </div>
        );
    }
}
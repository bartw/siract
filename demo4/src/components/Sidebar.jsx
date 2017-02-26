import React from 'react';
import Slide from '../models/Slide';
import List from './List';
import SidebarButtons from './SidebarButtons';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
                <List slides={this.props.slides} onSelect={this.props.onSelect} />
                <SidebarButtons onAdd={this.props.onAdd} onStart={this.props.onStart} onImport={this.props.onImport} />
            </div>
        );
    }
}

Sidebar.propTypes = {
    slides: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Slide)).isRequired,
    onSelect: React.PropTypes.func.isRequired,
    onImport: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired,
    onStart: React.PropTypes.func.isRequired
};
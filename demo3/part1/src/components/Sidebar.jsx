import React from 'react';
import List from './List';
import SidebarButtons from './SidebarButtons';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
                <List slides={this.props.slides} />
                <SidebarButtons />
            </div>
        );
    }
}
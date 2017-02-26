import React from 'react';

export default class SidebarButtons extends React.Component {
    render() {
        return (
            <div id="sidebar-buttons">
                <button onClick={this.props.onImport}>Import</button>
                <button onClick={this.props.onAdd}>Add</button>
                <button onClick={this.props.onStart}>Start</button>
            </div>
        );
    }
}

SidebarButtons.propTypes = {
    onImport: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired,
    onStart: React.PropTypes.func.isRequired
};
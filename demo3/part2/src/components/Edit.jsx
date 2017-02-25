import React from 'react';

export default class Edit extends React.Component {
    render() {
        return (
            <div id="edit">
                <div>
                    <textarea placeholder="Content" value={this.props.slide.content} />
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
        );
    }
}
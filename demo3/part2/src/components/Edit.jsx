import React from 'react';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.change = this.change.bind(this);
    }

    change(e) {
        this.props.onUpdate(e.target.value);
    }

    render() {
        return (
            <div id="edit">
                <div>
                    <textarea placeholder="Content" value={this.props.slide.content} onChange={this.change} />
                </div>
                <div>
                    <button onClick={this.props.onRemove}>Remove</button>
                </div>
            </div>
        );
    }
}
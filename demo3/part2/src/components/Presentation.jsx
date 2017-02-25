import React from 'react';
import Preview from './Preview';

export default class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous() {
        this.setState({ index: Math.max(this.state.index - 1, 0) });
    }

    next() {
        this.setState({ index: Math.min(this.state.index + 1, this.props.slides.length - 1) });
    }

    render() {
        return (
            <div id="presentation">
                {this.props.slides.length && <Preview slide={this.props.slides[this.state.index]} />}
                <div id="presentation-buttons">
                    <button onClick={this.previous}>Previous</button>
                    <button onClick={this.next}>Next</button>
                    <button onClick={this.props.onStop}>Stop</button>
                </div>
            </div>
        );
    }
}
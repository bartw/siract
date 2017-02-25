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
        this.setState((prevState) => ({ index: Math.max(prevState.index - 1, 0) }));
    }

    next() {
        this.setState((prevState, props) => ({ index: Math.min(prevState.index + 1, props.slides.length - 1) }));
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
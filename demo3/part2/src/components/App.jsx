import React from 'react';
import Sidebar from './Sidebar';
import Details from './Details';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.slides = [
            { id: 1, content: '# Slide 1' },
            { id: 2, content: '# Slide 2' }
        ];
    }

    render() {
        return (
            <div id="app">
                <Sidebar slides={this.slides} />
                <Details slide={this.slides[0]} />
            </div>
        );
    }
}
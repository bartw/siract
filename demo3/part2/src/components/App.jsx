import React from 'react';
import Sidebar from './Sidebar';
import Details from './Details';
import Presentation from './Presentation';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                { id: 1, content: '# Slide 1' },
                { id: 2, content: '# Slide 2' }
            ],
            selectedId: 1,
            showPresentation: false
        };
        this.add = this.add.bind(this);
        this.select = this.select.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    add() {
        const id = Math.max(...this.state.slides.map(slide => slide.id)) + 1;
        const slide = { id: id, content: '# Slide ' + id };
        this.setState({ slides: this.state.slides.concat(slide), selectedId: id });
    }

    remove() {
        this.setState({ slides: this.state.slides.filter(slide => slide.id !== this.state.selectedId), selectedId: null });
    }

    select(id) {
        this.setState({ selectedId: id });
    }

    update(content) {
        this.setState({ slides: this.state.slides.map(slide => slide.id === this.state.selectedId ? { ...slide, content: content } : slide) });
    }

    start() {
        this.setState({ showPresentation: true });
    }

    stop() {
        this.setState({ showPresentation: false });
    }

    render() {
        return (
            <div id="app">
                <Sidebar slides={this.state.slides} onAdd={this.add} onSelect={this.select} onStart={this.start} />
                <Details slide={this.state.slides.find(slide => slide.id === this.state.selectedId)} onRemove={this.remove} onUpdate={this.update} />
                {this.state.showPresentation && <Presentation slides={this.state.slides} onStop={this.stop} />}
            </div>
        );
    }
}
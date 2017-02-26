import React from 'react';
import Editor from './Editor';
import Presentation from './Presentation';
import Import from './Import';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                { id: 1, content: '# Slide 1' },
                { id: 2, content: '# Slide 2' }
            ],
            selectedId: 1,
            showPresentation: false,
            showImport: false
        };
        this.add = this.add.bind(this);
        this.select = this.select.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.import = this.import.bind(this);
        this.showImport = this.showImport.bind(this);
        this.hideImport = this.hideImport.bind(this);
    }

    add() {
        this.setState((prevState, props) => {
            const id = Math.max(...prevState.slides.map(slide => slide.id)) + 1;
            const slide = { id: id, content: '# Slide ' + id };
            return { slides: prevState.slides.concat(slide), selectedId: id };
        });
    }

    remove() {
        this.setState((prevState) => ({ slides: prevState.slides.filter(slide => slide.id !== prevState.selectedId), selectedId: null }));
    }

    select(id) {
        this.setState({ selectedId: id });
    }

    update(content) {
        this.setState((prevState) => ({ slides: prevState.slides.map(slide => slide.id === prevState.selectedId ? { ...slide, content: content } : slide) }));
    }

    start() {
        this.setState({ showPresentation: true });
    }

    stop() {
        this.setState({ showPresentation: false });
    }

    import(slides) {
        this.setState({ slides: slides, selectedId: slides && slides.length ? slides[0].id : null, showImport: false });
    }

    showImport() {
        this.setState({ showImport: true });
    }

    hideImport() {
        this.setState({ showImport: false });
    }

    render() {
        const slide = this.state.slides.find(slide => slide.id === this.state.selectedId);
        return (
            <div id="app">
                <Editor slides={this.state.slides} onAdd={this.add} onSelect={this.select} onStart={this.start} onImport={this.showImport} slide={slide} onRemove={this.remove} onUpdate={this.update} />
                {this.state.showPresentation && <Presentation slides={this.state.slides} onStop={this.stop} />}
                {this.state.showImport && <Import onImport={this.import} onHide={this.hideImport} />}
            </div>
        );
    }
}
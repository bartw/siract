import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
    render() {
        const listItems = this.props.slides ? this.props.slides.map(slide => <ListItem key={slide.id} slide={slide} onSelect={this.props.onSelect} />) : [];
        return (
            <div id="list">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}
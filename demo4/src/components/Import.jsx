import React from 'react';

export default class Import extends React.Component {
    constructor(props) {
        super(props);

        this.state = { url: '', notification: '' };
        this.change = this.change.bind(this);
        this.import = this.import.bind(this);
    }

    change(e) {
        this.setState({ url: e.target.value });
    }

    import() {
        if (!this.state.url) {
            this.setState({ notification: 'Please set an url.' });
            return;
        }

        fetch(this.state.url, { mode: 'cors' })
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error();
            })
            .then(text => {
                const rawSlides = text.split('\n\n----------\n\n');
                const slides = rawSlides.map((slide, index) => ({ id: index + 1, content: slide }));
                this.props.onImport(slides);
            })
            .catch(() => {
                this.setState({ notification: 'Something went wrong please try again.' });
            });
    }

    render() {
        return (
            <div id="import">
                <div>
                    <div>
                        <input placeholder="Url" value={this.state.url} onChange={this.change} />
                    </div>
                    <div>
                        <button onClick={this.import}>Import</button>
                        <button onClick={this.props.onHide}>Cancel</button>
                    </div>
                    <div>
                        <p>{this.state.notification}</p>
                    </div>
                </div>
            </div>
        );
    }
}
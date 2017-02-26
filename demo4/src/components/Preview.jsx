import React from 'react';
import showdown from 'showdown';

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        showdown.setFlavor('github');
        showdown.extension('targetlink', function () {
            return [{
                type: 'html',
                regex: /(<a [^>]+?)(>.*<\/a>)/g,
                replace: '$1 target="_blank"$2'
            }];
        });
        this.converter = new showdown.Converter({ extensions: ['targetlink'] });
    }
    render() {
        const htmlContent = { __html: this.converter.makeHtml(this.props.content) };
        return (
            <div className="preview">
                <div className="content" dangerouslySetInnerHTML={htmlContent} />
            </div>
        );
    }
}

Preview.propTypes = {
    content: React.PropTypes.string.isRequired
};
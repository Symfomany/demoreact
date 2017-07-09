import React from 'react';

export class VideoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const url = "//www.youtube.com/embed/" + this.props.video.id.videoId;
        return <div className="col s4">

            <img className="materialboxed" src={this.props.video.snippet.thumbnails.default.url} alt="" />
            <h5>{this.props.video.snippet.title}</h5>
            <small>{this.props.video.snippet.channelTitle}</small>

            <p>{this.props.video.snippet.description}</p>

        </div>;
    }

}

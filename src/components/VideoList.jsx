import React from 'react';
import { Tick } from './Tick';
import { VideoItem } from './VideoItem';


export default class VideoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const rows = [];
        this.props.videos.forEach((video) => {
            rows.push(<VideoItem key={video.id.videoId} video={video} />);
        });

        if (this.props.videos.length > 0) {
            return (
                <div className="row">
                    <div>
                        {rows}
                    </div>
                </div>
            );
        } else {
            return <div>Aucune vidéos our le moment</div>;
        }

    }

}
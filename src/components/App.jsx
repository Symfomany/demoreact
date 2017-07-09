import React from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import _ from 'lodash';

const apiKey = "AIzaSyCeJJa0CpvMqUJop4sOh3w8N3roqzfV_cg";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideos: null
        };
        this.videoSearch('reactjs');
    }

    videoSearch(term) {
        YTSearch({ key: apiKey, term: term }, (videos => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideos: videos[0]
            });
        }));
    }


    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div className="container">
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoList videos={this.state.videos} />
            </div>);
    }

}
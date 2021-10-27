import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="video-item item" onClick={() => {onVideoSelect(video)}}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="" />
            <div className="content">
                <a className="header">{video.snippet.title}</a>
            </div>
        </div>
    )
}

export default VideoItem;
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({list, onVideoSelect}) => {
    
   const finalList = list.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    });

    return <div className="ui relaxed divided list">{finalList}</div>;
};

export default VideoList;
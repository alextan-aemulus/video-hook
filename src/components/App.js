import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import useVideos from '../hooks/useVideos';

const App = () => {

    const [videos, search] = useVideos('IU');
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui segment grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} list={videos} />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default App;
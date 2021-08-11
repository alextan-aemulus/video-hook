import { useState, useEffect } from "react";
import youtube from '../api/youtube';

const useVideos = (defaultTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultTerm);
    },[defaultTerm]);

    const search = async term => {
        const response = await youtube.get('/search', {params : {q : term}});
    
        setVideos(response.data.items);
    };

    //return as object
    // return { videos, onTermSubmit };
    //return as array
    return [videos, search];

};

export default useVideos;

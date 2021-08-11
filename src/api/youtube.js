import axios from 'axios';

const KEY = "AIzaSyCJ1jwfQbTy76biDHz5FjZtkFg86C-sOx8";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        type: 'video', 
        maxResults: 5,
        key: KEY
    }
});


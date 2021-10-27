import axios from 'axios';

const KEY = 'AIzaSyAwYXli_HrsMQZP6CfFla1qYcalZkSG4II';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})

import axios from 'axios';

const KEY='AIzaSyA9NidTSDM5oZ9LHJQO8UTkHY04dWQkkvk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type:'video',
    maxResults: 5,
    key: KEY,
  },
});

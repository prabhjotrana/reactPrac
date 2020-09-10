import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID _ruudh_h7Na5ycUqNCvh-v33ikkMsj2idP8sC77BnQw"
      }  
});
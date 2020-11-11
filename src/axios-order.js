import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger7-sarthak.firebaseio.com"
});

export default instance;
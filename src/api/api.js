import axios from 'axios';

const api = axios.create({

    baseURL: 'http://localhost/apireact/',

});

export default api;
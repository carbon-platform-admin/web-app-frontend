import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://carbon-platform-v1.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json',   
        // "Access-Control-Allow-Origin":  "*"
        // 'withCredentials': 'true'      
    },
})
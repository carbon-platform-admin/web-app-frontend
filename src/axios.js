import axios from 'axios';
import { serverHost } from './hosts';

export const api = axios.create({
    baseURL: serverHost,
    headers: {
        'Content-Type': 'application/json',   
        // "Access-Control-Allow-Origin":  "*"
        // 'withCredentials': 'true'      
    },
})
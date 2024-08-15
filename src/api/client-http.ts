import type { AxiosInstance } from 'axios';
import axios from 'axios';

class ClientHTTP {
    private api: AxiosInstance;
    private apiKey: string = "27a701a";
    
    constructor () {
        this.api = axios.create({
            baseURL: 'https://www.omdbapi.com',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                apikey: this.apiKey
            }
        });
    }

    getApi() {
        return this.api;
    }
};

export default new ClientHTTP().getApi();
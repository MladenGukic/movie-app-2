import axios from 'axios';
const BASE_URL =  axios.defaults.baseURL = 'http://localhost:8000/api/'

 class MovieService {
    constructor() {
        this.configureAxios(
            BASE_URL, { 
            accept:'application/json', 
            authorization: `Bearer ${localStorage.getItem('token')}` })
    }

    configureAxios(baseUrl, headers = {}) {

        axios.defaults.baseURL = baseUrl

        Object.assign(
            axios.defaults.headers.common,
            headers
        )
    }
 }


 export const moviesService = new MovieService()
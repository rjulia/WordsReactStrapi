import axios from 'axios';

export const getWords = () => {
    return axios.get('/words');
};
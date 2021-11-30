import axios from 'axios';

const getAxios = () => {
    return axios.create({
        baseURL: 'https://city4people-api.herokuapp.com/',
    });
};

export default getAxios;

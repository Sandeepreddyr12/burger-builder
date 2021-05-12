import axios from 'axios';

const axioInstance = axios.create({
    baseURL : 'https://react-myburger-3e53f-default-rtdb.firebaseio.com/'
});

export default axioInstance;
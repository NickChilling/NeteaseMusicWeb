import axios from 'axios';

export const baseUrl = 'http://139.9.208.205:3000';

const axiosInstance = axios.create({
    baseUrl:baseUrl
});
axiosInstance.interceptors.response.use(
    res => res.data,
    err =>{
        console.log(err, "网络错误");
    }
);

export {axiosInstance}
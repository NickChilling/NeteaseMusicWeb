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

let category = ["华语","欧美","日本","韩国","其他"];
let singer = ["男","女","组合","其他"]
const startKey = 1000;
export const categoryTypes = [...Array(15)].map((item,index)=>{
    let i = Math.floor(Math.random()*category.length);
    let j = Math.floor(Math.random()*singer.length);
    return {
        name:category[i]+singer[j],
        key: String(startKey+index)
    };
})
export const alphaTypes = [...Array(26)].map((item,index)=>{
    let code = 'A'.charCodeAt()+index;
    return {
        name: String.fromCharCode(code),
        key:String(startKey+index)
    };
})
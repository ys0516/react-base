/**
 * Created by Ysssssss on 19/4/21.
 */


import axios from 'axios'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '//3000kr.cn'
}

axios.defaults.timeout = 10000

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    const { data } = response
    if (data.error_code) {
        return Promise.reject(data);
    }
    return data;
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '错误请求';
                break;
            case 401:
                err.message = '未授权，请重新登录';
                break;
            case 403:
                err.message = '拒绝访问';
                break;
            case 404:
                err.message = '请求错误,未找到该资源';
                break;
            case 405:
                err.message = '请求方法未允许';
                break;
            case 408:
                err.message = '请求超时';
                break;
            case 500:
                err.message = '服务器端出错';
                break;
            case 501:
                err.message = '网络未实现';
                break;
            case 502:
                err.message = '网络错误';
                break;
            case 503:
                err.message = '服务不可用';
                break;
            case 504:
                err.message = '网络超时';
                break;
            case 505:
                err.message = 'http版本不支持该请求';
                break;
            default:
                err.message = `连接错误${err.response.status}`;
        }
    }
    return Promise.reject(err);
});

export const postAxios = (url, data) => {
    return axios({
        method: 'POST',
        url,
        data
    })
}

export const getAxios = (url, data) => {
    return axios({
        method: 'GET',
        url,
        data
    })
}

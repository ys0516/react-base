/**
 * Created by Ysssssss on 19/4/21.
 */


import axios from 'axios'
import { getCookie } from "../utils/cookie";
import { alertError } from "./tips";

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '//3000kr.cn'
}

axios.defaults.timeout = 10000

axios.defaults.headers = {
    ...axios.defaults.headers,
    Authentication: getCookie('accessToken') || ''
}

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    const { data } = response
    if (!response.success) {
        return Promise.reject({
            code: 200,
            message: response.msg,
            error: response.error,
        });
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

export function postAxios (url, data, error, needReject) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res)
        }, err => {
            const errorMessage = err.message || error || '接口调用失败'
            alertError(errorMessage)
            needReject && reject(errorMessage)
        })
    })
}

export function getAxios (url, data, error, needReject) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            data: data
        }).then(res => {
            resolve(res)
        }, err => {
            const errorMessage = err.message || error || '接口调用失败'
            alertError(errorMessage)
            needReject && reject(errorMessage)
        })
    })
}

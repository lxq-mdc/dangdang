import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import qs from 'qs'

import { showMessage } from "./status";
import { message, Spin } from 'antd';
import { ILogin, IUser } from '../model/login';
import App from "../App";


// 返回res.data的interface
export interface IResponse {
    status: number | string;
    data: any;
    msg: string;
}

let axiosInstance:AxiosInstance = axios.create({
    // baseURL: 'process.env.REACT_APP_BASE_URL',
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    // transformRequest: [
    //     function(data) {
    //         //由于使用的 form-data传数据所以要格式化
    //         delete data.Authorization;
    //         data = qs.stringify(data);
    //         return data;
    //     }
    // ]
});

// axios实例拦截响应
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.headers.authorization) {
            localStorage.setItem('token', response.headers.authorization);
        } else {
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
        }

        if (response.status === 200) {
            return response;
        } else {
            showMessage(response.status);
            return response;
        }
    },
    // 请求失败
    (error: any) => {
        const {response} = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage(response.status);
            return Promise.reject(response.data);
        } else {
            message.error('网络连接异常,请稍后再试!');
        }
    }
);

// axios实例拦截请求
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers!.authorization = `Bearer ${token}`
            console.log('config',config)
        }
        return config;
    },
    (error:any) => {
        return Promise.reject(error);
    }
)

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
export const Login = (params:Partial<ILogin>): Promise<IResponse> => {
    console.log('params',params)
    console.log('qs.stringify(params)',qs.stringify(params))
    return axiosInstance.post('/login',qs.stringify(params)).then(res => {
        console.log('res',res)
        return  res.data
    });
};

/**
 * @description: 通过id获取用户
 * @params {IUser} params
 * @return {Promise}
 */
export const getUserInfo = (params: IUser): Promise<IResponse> => {
    return axiosInstance.post('user/getInfo',params).then(res => res.data);
};

/**
 *@description:获取首页推荐书籍
 * @params
 * @return {Promise}
  */
export const getRecommends=():Promise<IResponse>=>{
    return axiosInstance.get('/recommend').then(res=>res.data)
}

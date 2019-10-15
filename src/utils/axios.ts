import config from '../config';
import axios from 'axios';

type RequestType = 'post' | 'get' | 'POST' | 'GET' | 'put' | 'PUT' | 'delete' | 'DELETE';

const baseUrl = config.baseUrl;

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    location.href = '/login';
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status: number) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
    }
};
// 响应拦截器
axios.interceptors.response.use(
    // 请求成功
    (res) => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    (error) => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandle(response.status);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        }
});

const axiosSelf = async (
    url: string = '',
    data: { [props: string]: any } = {},
    type: RequestType = 'POST',
) => {
    type = type.toUpperCase() as RequestType;

    if (!/http/.test(url)) {
        url = baseUrl + url;
    }

    if (type === 'GET') {
        let dataStr = ''; // 数据拼接字符串
        Object.keys(data).forEach((key) => {
            dataStr += key + '=' + data[key] + '&';
        });

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    const requestConfig: {
        method: RequestType;
        url: string;
        mode: string;
        redirect: string;
        credentials?: string;
        data?: {
            [props: string]: any;
        }
    } = {
        method: type,
        url,
        mode: 'cors',
        redirect: 'follow',
        credentials: 'include',
    };

    if (type === 'POST' || type === 'PUT') {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        requestConfig.data = formData;
    }

    return new Promise((resolve: any, reject: any) => {
        axios(requestConfig).then((res: any) => {
            resolve(res.data);
        }).catch((err: any) => {
            console.error('error  服务器异常', err);
            reject(err);
        });
    });
};

export default axiosSelf;

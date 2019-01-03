import {BASE_URL, HTTP_TIMEOUT} from "./constans";

/**
 * [axios请求封装]
 * @param [url] String 请求的url
 * @param [method] String 请求方式
 * @param [data] Object post请求参数，在请求体中
 * @param [params] Object get请求参数,在请求链接中
 * */
export default ({ url, method = 'get', data, params}) => {
    console.log('in axios', url);
    return axios({
        url,
        method,
        data,
        params,
        baseURL: BASE_URL,
        timeout: HTTP_TIMEOUT,
        withCredentials: false,
        xsrfCookieName: 'XSRF-TOKEN'
    })
}
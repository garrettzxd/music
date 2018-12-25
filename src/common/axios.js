import {BASE_URL, HTTP_TIMEOUT} from "./constans";

export default ({ url, method = 'get', data, params}) => {
    console.log('in axios');
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
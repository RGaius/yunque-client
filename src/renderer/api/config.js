import Qs from 'qs'

export default {
    url: '',
    method: 'get',
    baseURL: '',
    // 请求参数格式处理
    transformRequest: [function (data) {
        if (data) {
            data = Qs.stringify(data)
            return data;
        } else {
            return;
        }
    }],
    transformResponse: [function (data) {
        return data;
    }],
    headers: {},
    timeout: 30000,
    withCredentials: false, // default
    responseType: 'json', // default
    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
    }
}
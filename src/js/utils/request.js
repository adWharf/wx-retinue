/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: request.js
 * @time: 07/05/2018 14:59
 */
import parser from 'query-string';
import moment from 'moment';
import qs from 'qs';
import axios from 'axios';
import config from '../config';

let host = 'https://mp.weixin.qq.com';

export function getQuery(name) {
    let res = parser.parse(window.location.search);
    if (name in res) {
        return res[name];
    }
    return null;
}

axios.defaults.retry = 3;

axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    return response
}, error => {
    let config = error.config;

    // If config does not exist or the retry option is not set, reject
    if(!config || !config.retry) return Promise.reject(error);

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;

    // Check if we've maxed out the total number of retries
    if(config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(error);
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Create new promise to handle exponential backoff
    let backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
        return axios(config);
    });
});

function checkStatus (response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
        // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

function checkCode (res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        console.log(res.msg)
    }
    if (res.data && (!res.data.success)) {
        console.log(res.data.error_msg)
    }
    return res
}

export function get (url, params) {
    return axios({
        method: 'get',
        url,
        params, // get 请求时带的参数
        timeout: 60000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    }).then(
        (response) => {
            return checkStatus(response)
        }
    ).then(
        (res) => {
            return checkCode(res)
        }
    )
}

export function put(url, data) {
    return axios({
        method: 'put',
        url,
        data: qs.stringify(data),
        timeout: 60000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then(
        (response) => {
            return checkStatus(response)
        }
    ).then(
        (res) => {
            return checkCode(res)
        }
    )
}

export function post(url, data) {
    return axios({
        method: 'post',
        url,
        data: qs.stringify(data),
        timeout: 60000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then(
        (response) => {
            return checkStatus(response)
        }
    ).then(
        (res) => {
            return checkCode(res)
        }
    )
}

function autoComQuery(query) {
    if (! query) {
        query = {};
    }
    query['token'] = getQuery('token');
    query['_'] = (new Date()).valueOf();

    if (! ('start_date' in query)) {
        query['start_date'] = '2000-01-01';
    }
    if (! ('end_date' in query)) {
        query['end_date'] = moment().format('YYYY-MM-DD');
    }
    if (! ('appid' in query)) {
        query['appid'] = '';
    }
    if (! ('spid' in query)) {
        query['spid'] = '';
    }
    return query;
}


// Interact with wx server
export const wx = {
    get: (url, query) => {
        url = url.startsWith('/')? url: '/' + url;
        query = autoComQuery(query);
        return get(host + url, query);
    },
    post: (url, data) => {
        url = url.startsWith('/')? url: '/' + url;
        let extraData = autoComQuery(null);
        return post(host + url, Object.assign(data, extraData));
    }
};

// Interact with server
export const server = {
    get: (url, query) => {
        url = url.startsWith('/')? url: '/' + url;
        //get(config.transfer + url, query);
        return get(config.transfer + url, query).then((resp) => {
            return Promise.resolve(resp);
        }, err =>{
            return Promise.reject(err);
        }).finally(() => {
            get(config.api + url, query)
        });
        //return get(config.api + url, query);
    },
    post: (url, data) => {
        url = url.startsWith('/')? url: '/' + url;
        //return post(config.transfer + url, data);
        return post(config.transfer + url, data).then((resp) => {
            return Promise.resolve(resp);
        }, err =>{
            return Promise.reject(err);
        }).finally(() => {
            post(config.api + url, data)
        });
    },
    put: (url, data) => {
        url = url.startsWith('/')? url: '/' + url;
        //return put(config.transfer + url, data);
        return put(config.transfer + url, data).then((resp) => {
            return Promise.resolve(resp);
        }, err =>{
            return Promise.reject(err);
        }).finally(() => {
            put(config.api + url, data)
        });
    },
};

export const extension = {
    get: (url, query) => {
        return new Promise((resolve, reject) => {
            chrome.extension.sendRequest({method: 'GET', url, query}, function(response) {
                if (response.status = 'RESOLVED') {
                    resolve(response.response);
                } else {
                    reject(response.response);
                }
            });
        });
    },

    post: (url, data) => {
        return new Promise((resolve, reject) => {
            chrome.extension.sendRequest({method: 'GET', url, data}, function(response) {
                if (response.status = 'RESOLVED') {
                    resolve(response.response);
                } else {
                    reject(response.response);
                }
            });
        });
    }
};
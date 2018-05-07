/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: request.js
 * @time: 07/05/2018 14:59
 */

import parser from 'query-string';
import moment from 'moment';

let host = 'https://mp.weixin.qq.com';

export function build(uri, query) {
    query['token'] = getQuery('token');
    query['_'] = (new Date()).valueOf();

    if (! ('start_date' in query)) {
        query['start_date'] = '2000-01-01';
    }
    if (! ('end_date' in query)) {
        query['end_date'] = moment().format('YYYY-MM-DD');
    }
    return host + '/' + uri + '?' + parser.stringify(query);
}

export function getQuery(name) {
    let res = parser.parseUrl(window.location.search);
    if (name in res.query) {
        return res.query[name];
    }
    return null;
}

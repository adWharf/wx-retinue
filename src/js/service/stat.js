/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: stat.js
 * @time: 07/05/2018 16:55
 */

import { wx, server } from '../utils/request';
import { accountName } from "../utils/page";


export function adStat() {
    return wx.get('promotion/snsdelivery/snsstat', {
        page_size: 1000,
        page: 1,
        action: 'get_camp_list',
    });
}

export function reportAdStat(data) {
    let name = accountName();

    // Make it compatible with old interface
    server.post('saveInputData', {
        "data": JSON.stringify(data),
        "code": "all"
    });

    return server.post('dataReporters', {
        'account': name,
        'code': 'all',
        'data': JSON.stringify(data),
    });
}
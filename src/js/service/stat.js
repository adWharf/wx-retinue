/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: stat.js
 * @time: 07/05/2018 16:55
 */

import config from "../config";
import axios from "axios";
import { build } from '../utils/request';
import { accountName } from "../utils/page";


export function adStat() {
    return axios.get(build('promotion/snsdelivery/snsstat', {
        page_size: 1000,
        page: 1,
        action: 'get_camp_list',
        appid: '',
        spid: '',
    }))
}

export function reportAdStat(data) {
    let name = accountName();
    return axios.post(config.api + 'dataReporters', {
        'account': name,
        'code': 'all',
        'data': JSON.stringify(data),
    });
}
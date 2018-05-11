/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: account.js
 * @time: 11/05/2018 11:03
 */

import { wx } from '../utils/request';

export function account() {
    return new Promise((resolve, reject) => {
        wx.get('promotion/snsdelivery/snsadvertiser', {
            action: 'get',
            f: 'json',
        }).then( resp => {
            resolve(resp.data.sns_advertiser_info);
        }, resp => {
            reject(resp)
        });
    });
}
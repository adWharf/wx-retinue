/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: stat.js
 * @time: 07/05/2018 16:55
 */

import { wx, server, extension } from '../utils/request';
import { accountName } from "../utils/page";
import config from '../config';


export function adStat() {
    return wx.get('promotion/snsdelivery/snsstat', {
        page_size: 1000,
        page: 1,
        action: 'get_camp_list',
    });
}

/**
 *
 * @param data
 * @returns {*}
 * Example data:
 * {
 *	"base_resp": {
 *		"ret": 0,
 *		"err_msg": "ok"
 *	},
 *	"camp_list": [{
 *		"cid": 1640512809,
 *		"total_budget": 1000000,
 *		"total_cost": 16095,
 *		"view_count": 2658,
 *		"click_url_count": 1,
 *		"click_pic_count": 13,
 *		"heart_count": 1,
 *		"comment_count": 0,
 *		"click_follow_count": 0,
 *		"share_timeline_action_count": 0,
 *		"share_friend_action_count": 0,
 *		"down_done_count": 0,
 *		"down_click_count": 0,
 *		"install_done_count": 0,
 *		"install_click_count": 0,
 *		"video_play_count": 0,
 *		"video_share_count": 0,
 *		"video_fav_count": 0,
 *		"card_get_count": 0,
 *		"card_use_count": 0,
 *		"snsid": "12799814246265919302",
 *		"real_status": "暂停投放",
 *		"cname": "wechat_wm2_j59zds2",
 *		"conv_index": "下单量：0",
 *		"conv_rate": "0",
 *		"conv_price": "0",
 *		"date": "20180510",
 *		"beg_date": "20180510",
 *		"end_date": "20180519",
 *		"detail_rate": "0.000376223",
 *		"buy_type": "竞价购买",
 *		"ad_type": "图文广告",
 *		"tmpl_type": "电商推广",
 *		"sy_cost": "160.95",
 *		"sy_budget": "10000元\/天",
 *		"poi_pv": 0,
 *		"ios_activated": 0,
 *		"canvas_exp_pv": 11,
 *		"canvas_sharefeed_pv": 0,
 *		"canvas_sharecontact_pv": 0,
 *		"canvas_fav_pv": 0,
 *		"canvas_flag": "100",
 *		"poi_uv": 0,
 *		"order_pv": 0,
 *		"order_amount": 0,
 *		"quest_reservation_pv": 1
 *	}],
 *	"total_num": 316,
 *	"update_hour": "201805101205"
 *}
 */
export function reportAdStat(data) {
    let name = accountName();
    if (config.debug) {
        return Promise.resolve('Debug mode');
    }

    return server.post('dataReporters', {
        'account': name,
        'code': 'all',
        'data': JSON.stringify(data),
    });
}
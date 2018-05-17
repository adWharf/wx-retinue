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
import moment from 'moment';


/**
 *
 * @returns {*}
 * {
 *	"conf": {
 *		"page": 1,
 *		"page_size": 20,
 *		"total_num": 390,
 *		"total_page": 20,
 *		"updateminute": "201805151100"
 *	},
 *	"list": [{
 *		"all_status": {
 *			"flow_lock_status": 0,
 *			"op_status": "ADSTATUS_SUSPEND",
 *			"review_status": 1,
 *			"view_status": "ADSTATUS_SUSPEND"
 *		},
 *		"campaign3_index": {
 *			"clk_pv": 132,
 *			"comindex": 2,
 *			"convclk_pv": 120,
 *			"cpa": "206.94",
 *			"ctr": "0.0127",
 *			"cvr": "0.0167",
 *			"exp_pv": 10419,
 *			"order_amount": 39800,
 *			"order_roi": "0.96",
 *			"paid": "413.88"
 *		},
 *		"campaign_info": {
 *			"acctid": "",
 *			"appid": "",
 *			"auto_release_time": 0,
 *			"begin_time": 1526054400,
 *			"budget": 10000000,
 *			"cid": 1640895854,
 *			"cid_gdt": 0,
 *			"client": "",
 *			"cname": "wechat_wm2_511pt1",
 *			"create_time": 0,
 *			"crt_size": 666,
 *			"ctype": "CAMPAIGNTYPE_AUCTION",
 *			"day_budget": 0,
 *			"day_budget_limit_time": 0,
 *			"end_time": 1526918399,
 *			"error_flag_sync_gdt": 0,
 *			"eval_image_result": "",
 *			"eval_pass_times": 0,
 *			"eval_result": "",
 *			"eval_times": 0,
 *			"gdt_status_change_time": 0,
 *			"last_user_update_time": 1526337071,
 *			"model_version": 3,
 *			"modify_after_eval_times": 0,
 *			"mpid": "",
 *			"need_upd_gdt_status": 0,
 *			"op_time": 0,
 *			"outer_cid": "0",
 *			"pos_type": 999,
 *			"present_activity_times": 0,
 *			"product_id": "",
 *			"product_type": "PRODUCTTYPE_WECHAT_SHOP",
 *			"review_status": 0,
 *			"rpt_release_status": 0,
 *			"source": 1,
 *			"spid": "spid826eaa78aa",
 *			"status": "",
 *			"subordinate_product_id": "",
 *			"sync_status": 0,
 *			"sync_type": 0,
 *			"uid": 1883022,
 *			"update_count": 0
 *		},
 *		"material_info": {
 *			"abandoned_by": "",
 *			"appid": "",
 *			"appmsg_info": "",
 *			"auto_preview_time": 0,
 *			"backup_dest_url": "",
 *			"cid": 1640895854,
 *			"create_time": 0,
 *			"crt_info": "[{\"width\":800,\"height\":800,\"size\":165085,\"image_url\":\"http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?m=a9cde5015515c85b3cbd25a92972609f&filekey=30340201010420301e02016d040253480410a9cde5015515c85b3cbd25a92972609f02030284dd040d00000004627466730000000131&hy=SH&storeid=32303138303531313036333933353030303233356634313336666664393337303561333230613030303030303664&bizid=1023\",\"thumb_url\":\"http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?m=a9cde5015515c85b3cbd25a92972609f&filekey=30340201010420301e02016d040253480410a9cde5015515c85b3cbd25a92972609f02030284dd040d00000004627466730000000131&hy=SH&storeid=32303138303531313036333933353030303233356634313336666664393337303561333230613030303030303664&bizid=1023\"}]",
 *			"crt_size": 666,
 *			"crt_sync_status": 0,
 *			"desc": "买衬衫尺寸总不合身\n来体验一下量身定制服务\n远程智能量体，无需上门\n好看不贵才199元",
 *			"dest_conf": "",
 *			"dest_type": 0,
 *			"dest_url": "https://mp.weixin.qq.com/tp/ad_detail_info?page_key=4d5ffcf1d1b4e79913b545c6dc0b98f50d6388606fd90c3bad6e024b518d7f47c625f82868fda73c0c1e13790b12eedc",
 *			"dest_url_redirect": 0,
 *			"dest_url_switch": 0,
 *			"ext_click_url": "",
 *			"ext_exposure_url": "",
 *			"ext_info": "",
 *			"fingerprint": "",
 *			"head_click_param": "",
 *			"head_click_right_bar_flag": 0,
 *			"head_click_type": 0,
 *			"image_url": "",
 *			"industry_id": 0,
 *			"inner_link_name": "",
 *			"inside_title": "",
 *			"interaction": 0,
 *			"last_user_update_time": 0,
 *			"left_button_name": "",
 *			"left_button_page_id": 0,
 *			"link_hidden": 0,
 *			"link_name": "了解更多",
 *			"link_page_id": 0,
 *			"link_page_type": 4,
 *			"material_version": "",
 *			"model_version": 3,
 *			"notify_adhelper_time": 0,
 *			"op_time": 0,
 *			"outside_title": "",
 *			"page_id": 0,
 *			"page_type": 4,
 *			"permit_share": 0,
 *			"product_id": "",
 *			"product_type": "",
 *			"review_acquire_time": 0,
 *			"review_msg": "",
 *			"review_status": 0,
 *			"reviewer": "",
 *			"rid": 1640895858,
 *			"right_button_name": "",
 *			"right_button_page_id": 0,
 *			"scheme_url": "",
 *			"sns_aid": "12801201010308028239",
 *			"sns_sync_time": 0,
 *			"source": 1,
 *			"spid": "",
 *			"status": "",
 *			"submit_time": 0,
 *			"subordinate_product_id": "",
 *			"title": "",
 *			"tmpl_id": 0,
 *			"tmpl_type": 0,
 *			"tname": "",
 *			"uid": 0,
 *			"version": 0,
 *			"watermark": "",
 *			"white_list": ""
 *		},
 *		"product_info": {
 *			"cid": 1640895854,
 *			"client": "",
 *			"create_time": 1526022069,
 *			"error_flag_sync_gdt": 0,
 *			"gdt_status_change_time": 0,
 *			"last_user_update_time": 1526022077,
 *			"model_version": 3,
 *			"need_upd_gdt_status": 0,
 *			"op_time": 1526022077,
 *			"pname": "",
 *			"product_id": "",
 *			"product_info": "{\"jump_url_type\":2}\n",
 *			"product_type": "PRODUCTTYPE_WECHAT_SHOP",
 *			"review_status": 0,
 *			"status": "ADSTATUS_NORMAL",
 *			"sync_status": 0,
 *			"sync_type": 0,
 *			"type": 0,
 *			"uid": 1883022,
 *	 *		"update_count": 0
 *		}
 *	}],
 *	"msg": "",
 *	"ret": 0,
 *	"ret_msg": "ok"
 *}
 */
export function adStat() {
    let t_s = Math.floor((new Date()).getTime() / 1000 / 86400) * 86400;
    let t_e = t_s + 86400;
    return new Promise((resolve, reject) => {
        let promises = [];
        for (let i=1; i< 1000 / 50; i++) {
            promises.push(
                wx.get('promotion/as_rock', {
                    action: 'get_campaign_data',
                    args: JSON.stringify({
                        "op_type": 1,
                        "where": {},
                        "page": i,
                        "page_size": 1000,
                        "pos_type": 999,
                        "query_index": "[\"material_preview\",\"pos_type\",\"status\",\"budget\",\"paid\",\"exp_pv\",\"comindex\",\"cpa\",\"clk_pv\",\"ctr\",\"exposure_score\",\"order_roi\",\"begin_time\",\"end_time\"]",
                        "time_range": {
                            "start_time": t_s,
                            "last_time": t_e
                        }
                    }),
                }));
        }
        Promise.all(promises).then(resps => {
            let map = {};
            for (let resp of resps) {
                if (! resp.data.list) {
                    break;
                }
                for(let camp of resp.data.list) {
                    map[camp.campaign_info.cid] = camp;
                }
            }
            wx.get('promotion/snsdelivery/snsstat', {
                page_size: 1000,
                page: 1,
                action: 'get_camp_list',
            }).then(old_resp => {
                for(let camp of old_resp.data.camp_list) {
                    if (camp.cid in map && 'paid' in map[camp.cid].campaign3_index) {
                        camp.sy_cost = map[camp.cid].campaign3_index.paid;
                    } else {
                        camp.sy_cost = '0';
                    }

                    //camp.sy_cost = camp.sy_cost.toString();
                }
                resolve(old_resp);
            }, err => reject(err));
        }, err => reject(err));
    });

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
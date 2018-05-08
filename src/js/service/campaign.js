/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: campaign.js
 * @time: 07/05/2018 21:46
 */
import {server, wx} from '../utils/request';
import { deepMergeArr } from '../utils/helper'
import * as $ from 'jquery';

export const BID_TYPE_CPM = 'cpm';
export const BID_TYPE_OCPM = 'ocpm';
export const OPTIMIZE_MORE_CLICK = 2;
export const OPTIMIZE_MORE_ORDER = 7;

/**
 *
 * @param cid
 * @returns {*}
 * Return data example:
 * {
 *     "base_resp": {
 *         "ret": 0,
 *         "ret_msg": "ok"
 *     },
 *     "data": {
 *         "additional_args": {},
 *         "campaign": {
 *             "acctid": "wx1c6c6e5eaab3f043_spid826eaa78aa",
 *             "appid": "wx1c6c6e5eaab3f043",
 *             "auto_release_time": 0,
 *             "begin_time": 1527696000,
 *             "cid": 1639764962,
 *             "cid_gdt": 0,
 *             "client": "",
 *             "cname": "Mudata-test",
 *             "create_time": 1525426362,
 *             "ctype": "CAMPAIGNTYPE_AUCTION",
 *             "day_budget": 0,
 *             "day_budget_limit_time": 0,
 *             "end_time": 1527955199,
 *             "error_flag_sync_gdt": 0,
 *             "eval_image_result": "",
 *             "eval_pass_times": 0,
 *             "eval_result": "",
 *             "eval_times": 0,
 *             "gdt_status_change_time": 0,
 *             "last_user_update_time": 1525426362,
 *             "model_version": 3,
 *             "modify_after_eval_times": 0,
 *             "mpid": "",
 *             "need_upd_gdt_status": 0,
 *             "op_time": 1525426362,
 *             "outer_cid": "0",
 *             "present_activity_times": 0,
 *             "product_id": "",
 *             "product_type": "",
 *             "review_status": 0,
 *             "rpt_release_status": 0,
 *             "source": 1,
 *             "spid": "spid826eaa78aa",
 *             "status": "ADSTATUS_PENDING",
 *             "subordinate_product_id": "",
 *             "sync_status": 0,
 *             "sync_type": 0,
 *             "uid": 1883022,
 *             "update_count": 0
 *         },
 *         "creatives": [{
 *             "aid": 1639764964,
 *             "cid": 1639764962,
 *             "create_time": 1525426362,
 *             "last_user_update_time": 1525426362,
 *             "model_version": 3,
 *             "op_time": 1525426362,
 *             "rid": 1639764966,
 *             "tid": 1639764967,
 *             "uid": 1883022,
 *             "update_count": 0
 *         }],
 *         "materials": [{
 *             "abandoned_by": "",
 *             "appid": "wx1c6c6e5eaab3f043",
 *             "appmsg_info": "",
 *             "auto_preview_time": 0,
 *             "backup_dest_url": "",
 *             "cid": 1639764962,
 *             "create_time": 1525426362,
 *             "crt_info": "",
 *             "crt_size": 666,
 *             "crt_sync_status": 0,
 *             "desc": "",
 *             "dest_conf": "",
 *             "dest_type": 0,
 *             "dest_url": "",
 *             "dest_url_redirect": 0,
 *             "dest_url_switch": 0,
 *             "ext_click_url": "[]",
 *             "ext_exposure_url": "[]",
 *             "ext_info": "",
 *             "fingerprint": "19b1f4e2479160a4ffed3789e0ecd224",
 *             "head_click_param": "",
 *             "head_click_right_bar_flag": 0,
 *             "head_click_type": 0,
 *             "image_url": "",
 *             "industry_id": 0,
 *             "inner_link_name": "",
 *             "inside_title": "",
 *             "interaction": 0,
 *             "last_user_update_time": 1525426362,
 *             "left_button_name": "",
 *             "left_button_page_id": 0,
 *             "link_hidden": 0,
 *             "link_name": "",
 *             "link_page_id": 0,
 *             "link_page_type": 0,
 *             "material_version": "",
 *             "model_version": 3,
 *             "notify_adhelper_time": 0,
 *             "op_time": 1525426362,
 *             "outside_title": "",
 *             "page_id": 0,
 *             "page_type": 0,
 *             "permit_share": 0,
 *             "product_id": "",
 *             "product_type": "PRODUCTTYPE_WECHAT_SHOP",
 *             "review_acquire_time": 0,
 *             "review_msg": "",
 *             "review_status": 0,
 *             "reviewer": "",
 *             "rid": 1639764966,
 *             "right_button_name": "",
 *             "right_button_page_id": 0,
 *             "scheme_url": "",
 *             "sns_aid": "",
 *             "sns_sync_time": 0,
 *             "source": 1,
 *             "spid": "spid826eaa78aa",
 *             "status": "ADSTATUS_PENDING",
 *             "submit_time": 0,
 *             "subordinate_product_id": "",
 *             "title": "",
 *             "tmpl_id": 0,
 *             "tmpl_type": 0,
 *             "tname": "创意-20180504",
 *             "uid": 1883022,
 *             "version": 0,
 *             "watermark": "",
 *             "white_list": ""
 *         }],
 *         "product": {
 *             "cid": 1639764962,
 *             "client": "",
 *             "create_time": 1525426362,
 *             "error_flag_sync_gdt": 0,
 *             "gdt_status_change_time": 0,
 *             "last_user_update_time": 1525426362,
 *             "model_version": 3,
 *             "need_upd_gdt_status": 0,
 *             "op_time": 1525426362,
 *             "pname": "",
 *             "product_id": "",
 *             "product_info": "{}",
 *             "product_type": "PRODUCTTYPE_WECHAT_SHOP",
 *             "review_status": 0,
 *             "status": "ADSTATUS_NORMAL",
 *             "sync_status": 0,
 *             "sync_type": 0,
 *             "type": 0,
 *             "uid": 1883022,
 *             "update_count": 0
 *         },
 *         "target_groups": [{
 *             "ad_groups": [{
 *                 "ad_group": {
 *                     "acctid": "wx1c6c6e5eaab3f043_spid826eaa78aa",
 *                     "aid": 1639764964,
 *                     "aid_gdt": 0,
 *                     "aname": "石家庄市等-男-31至46岁-投放20180531至0602",
 *                     "appid": "wx1c6c6e5eaab3f043",
 *                     "audit_msg": "",
 *                     "begin_time": 1527696000,
 *                     "bid": 50,
 *                     "budget": 100000,
 *                     "cate_root": 0,
 *                     "category": 0,
 *                     "cid": 1639764962,
 *                     "cid_gdt": 0,
 *                     "city_level": 3,
 *                     "client": "",
 *                     "contract_flag": 2,
 *                     "cost_type": "COSTTYPE_CPM",
 *                     "create_time": 1525426362,
 *                     "end_time": 1527955199,
 *                     "error_flag_sync_gdt": 0,
 *                     "exposure_frequency": 6,
 *                     "flow_lock_status": 0,
 *                     "gdt_status_change_time": 0,
 *                     "get_task_time": 0,
 *                     "industry_id": "77309413130",
 *                     "is_new": 0,
 *                     "last_user_update_time": 1525426362,
 *                     "meta_class": 0,
 *                     "mid": 1639764963,
 *                     "mid_gdt": 0,
 *                     "model_version": 3,
 *                     "multi_pos": 0,
 *                     "need_upd_gdt_status": 0,
 *                     "need_wait_creative_status": 0,
 *                     "notify_adhelper_time": 0,
 *                     "op_time": 1525426362,
 *                     "op_user": "",
 *                     "outer_aid": "0",
 *                     "play_mode": "",
 *                     "poi": "",
 *                     "pos_type": 999,
 *                     "product_id": "",
 *                     "product_type": "PRODUCTTYPE_WECHAT_SHOP",
 *                     "review_status": -1,
 *                     "review_time": 0,
 *                     "siteset": "[\"SITESET_WECHAT\"]",
 *                     "source": 1,
 *                     "spid": "spid826eaa78aa",
 *                     "status": "ADSTATUS_PENDING",
 *                     "strategy_opt": "{\"bid_objective\":7,\"bid_action_type\":7}",
 *                     "subordinate_product_id": "",
 *                     "sync_status": 0,
 *                     "sync_type": 0,
 *                     "timeset": "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
 *                     "type": 0,
 *                     "uid": 1883022,
 *                     "update_count": 0
 *                 },
 *                 "ad_target": {
 *                     "ad_behavior": "[{\"in_action_list\":[],\"not_in_action_list\":[],\"uid\":1883022}]\n",
 *                     "age": "[\"31~46\"]",
 *                     "app_behavior": "{}\n",
 *                     "app_user": "",
 *                     "appid": "wx1c6c6e5eaab3f043",
 *                     "area": "[\"130100\",\"130200\",\"130300\",\"130400\",\"130500\",\"130600\",\"130700\",\"130800\",\"130900\",\"131000\",\"131100\",\"140100\",\"140200\",\"140300\",\"140400\",\"140500\",\"140600\",\"140700\",\"140800\",\"140900\",\"141000\",\"141100\",\"150100\",\"150200\",\"150300\",\"150400\",\"150500\",\"150600\",\"150700\",\"150800\",\"150900\",\"152200\",\"152500\",\"152900\",\"210300\",\"210400\",\"210500\",\"210600\",\"210700\",\"210800\",\"210900\",\"211000\",\"211100\",\"211200\",\"211300\",\"211400\",\"220100\",\"220200\",\"220300\",\"220400\",\"220500\",\"220600\",\"220700\",\"220800\",\"222400\",\"230200\",\"230300\",\"230400\",\"230500\",\"230600\",\"230700\",\"230800\",\"230900\",\"231000\",\"231100\",\"231200\",\"232700\",\"320200\",\"320300\",\"320400\",\"320600\",\"320700\",\"320800\",\"320900\",\"321000\",\"321100\",\"321200\",\"321300\",\"330300\",\"330400\",\"330500\",\"330600\",\"330700\",\"330800\",\"330900\",\"331000\",\"331100\",\"340100\",\"340200\",\"340300\",\"340400\",\"340500\",\"340600\",\"340700\",\"340800\",\"341000\",\"341100\",\"341200\",\"341300\",\"341500\",\"341600\",\"341700\",\"341800\",\"350300\",\"350400\",\"350500\",\"350600\",\"350700\",\"350800\",\"350900\",\"360100\",\"360200\",\"360300\",\"360400\",\"360500\",\"360600\",\"360700\",\"360800\",\"360900\",\"361000\",\"361100\",\"370300\",\"370400\",\"370500\",\"370600\",\"370700\",\"370800\",\"370900\",\"371000\",\"371100\",\"371200\",\"371300\",\"371400\",\"371500\",\"371600\",\"371700\",\"410200\",\"410300\",\"410400\",\"410500\",\"410600\",\"410700\",\"410800\",\"410900\",\"411000\",\"411100\",\"411200\",\"411300\",\"411400\",\"411500\",\"411600\",\"411700\",\"419001\",\"420200\",\"420300\",\"420500\",\"420600\",\"420700\",\"420800\",\"420900\",\"421000\",\"421100\",\"421200\",\"421300\",\"422800\",\"429004\",\"429005\",\"429006\",\"429021\",\"430200\",\"430300\",\"430400\",\"430500\",\"430600\",\"430700\",\"430800\",\"430900\",\"431000\",\"431100\",\"431200\",\"431300\",\"433100\",\"440200\",\"440400\",\"440500\",\"440600\",\"440700\",\"440800\",\"440900\",\"441200\",\"441300\",\"441400\",\"441500\",\"441600\",\"441700\",\"441800\",\"441900\",\"442000\",\"445100\",\"445200\",\"445300\",\"450100\",\"450200\",\"450300\",\"450400\",\"450500\",\"450600\",\"450700\",\"450800\",\"450900\",\"451000\",\"451100\",\"451200\",\"451300\",\"451400\",\"460100\",\"460200\",\"469001\",\"469002\",\"469003\",\"469005\",\"469006\",\"469007\",\"469021\",\"469022\",\"469023\",\"469024\",\"469025\",\"469026\",\"469027\",\"469028\",\"469029\",\"469030\",\"510300\",\"510400\",\"510500\",\"510600\",\"510700\",\"510800\",\"510900\",\"511000\",\"511100\",\"511300\",\"511400\",\"511500\",\"511600\",\"511700\",\"511800\",\"511900\",\"512000\",\"513200\",\"513300\",\"513400\",\"520100\",\"520200\",\"520300\",\"520400\",\"520500\",\"520600\",\"522300\",\"522600\",\"522700\",\"530100\",\"530300\",\"530400\",\"530500\",\"530600\",\"530700\",\"530800\",\"530900\",\"532300\",\"532500\",\"532600\",\"532800\",\"532900\",\"533100\",\"533300\",\"533400\",\"540100\",\"540200\",\"542100\",\"542200\",\"542400\",\"542500\",\"542600\",\"610200\",\"610300\",\"610400\",\"610500\",\"610600\",\"610700\",\"610800\",\"610900\",\"611000\",\"620100\",\"620200\",\"620300\",\"620400\",\"620500\",\"620600\",\"620700\",\"620800\",\"620900\",\"621000\",\"621100\",\"621200\",\"622900\",\"623000\",\"630100\",\"630200\",\"632200\",\"632300\",\"632500\",\"632600\",\"632700\",\"632800\",\"640100\",\"640200\",\"640300\",\"640400\",\"640500\",\"650100\",\"650200\",\"652100\",\"652200\",\"652300\",\"652700\",\"652800\",\"652900\",\"653000\",\"653100\",\"653200\",\"654000\",\"654200\",\"654300\",\"659001\",\"659002\",\"659003\",\"659004\"]",
 *                     "businessinterest": "[3,4,5,6,9,10,12,21]",
 *                     "client": "",
 *                     "connection": "[\"WIFI\",\"NET4G\"]",
 *                     "create_time": 1525426362,
 *                     "custom_poi": "[]",
 *                     "description": "",
 *                     "device_brand_model": "[1]",
 *                     "device_price": "[]",
 *                     "education": "[\"DOCTOR\",\"MASTER\",\"BACHELOR\"]",
 *                     "error_flag_sync_gdt": 0,
 *                     "gdt_status_change_time": 0,
 *                     "gender": "[\"MALE\"]",
 *                     "in_dmp_audience": "[]",
 *                     "in_wechat_number_pkg": "",
 *                     "in_wechat_smart_pkg": "",
 *                     "last_user_update_time": 1525426362,
 *                     "marriage_status": "[\"NEWLY_MARRIED\",\"MARRIED\"]",
 *                     "mid": 1639764963,
 *                     "mid_gdt": 0,
 *                     "mname": "target",
 *                     "mobile_price": "[]",
 *                     "model_version": 3,
 *                     "need_upd_gdt_status": 0,
 *                     "not_in_dmp_audience": "[]",
 *                     "not_in_wechat_number_pkg": "",
 *                     "op_time": 1525426362,
 *                     "os": "[\"IOS\"]",
 *                     "outer_mid": "0",
 *                     "oversea": "",
 *                     "payment": "[]",
 *                     "placement": "",
 *                     "review_status": 0,
 *                     "spid": "spid826eaa78aa",
 *                     "status": "ADSTATUS_NORMAL",
 *                     "sync_status": 0,
 *                     "sync_type": 0,
 *                     "target_flag": 0,
 *                     "targetingext": "",
 *                     "targetingruledefinition": "",
 *                     "telcom": "[]",
 *                     "trade_info": "",
 *                     "trade_status": 0,
 *                     "travel_area": "[]",
 *                     "uid": 1883022,
 *                     "update_count": 0,
 *                     "weapp_version": "{\"min_ios_version\":0,\"min_android_version\":0}",
 *                     "wechatflowclass": "[]"
 *                 }
 *             }],
 *             "target_group": {
 *                 "cid": 1639764962,
 *                 "create_time": 1525426362,
 *                 "delete_flag": 0,
 *                 "last_user_update_time": 1525426362,
 *                 "model_version": 3,
 *                 "mp_conf": "{\"version\":[],\"city_level\":3,\"show_area\":[],\"custom_poi\":[],\"time_type\":0,\"ocpm_type\":\"share\",\"import_target_used\":true,\"dmp_type\":\"\"}",
 *                 "op_time": 1525426362,
 *                 "status": "",
 *                 "tgid": 1639764965,
 *                 "uid": 1883022
 *             }
 *         }]
 *     },
 *     "ret": 0
 * }
 */
export function show(cid) {
    return wx.get('promotion/v3/get_campaign_info', {
        args: JSON.stringify({cid, pos_type: 999}),
    });
}

/**
 *
 * @param cid
 * @param data
 * @returns {*}
 *
 * Update data example:
 *  {
 *  	"pos_type": 999,
 *  	"product": {
 *  		"product_id": "",
 *  		"product_info": ""
 *  	},
 *  	"campaign": {
 *  		"cid": 1639764962,
 *  		"cname": "Mudata-test",
 *  		"end_time": 1527955199,
 *  		"begin_time": 1527696000
 *  	},
 *  	"sub_product": {
 *  		"subordinate_product_id": "",
 *  		"product_id": "",
 *  		"spname": ""
 *  	},
 *  	"target_groups": [{
 *  		"target_group": {
 *  			"mp_conf": "{\"version\":[],\"city_level\":3,\"show_area\":[],\"custom_poi\":[],\"time_type\":0,\"ocpm_type\":\"share\",\"import_target_used\":true,\"dmp_type\":\"\"}"
 *  		},
 *  		"ad_groups": [{
 *  			"ad_group": {
 *  				"aid": 1639764964,
 *  				"aname": "石家庄市等-男-31至46岁-投放20180531至0602",
 *  				"timeset": "",
 *  				"product_id": "",
 *  				"end_time": 1527955199,
 *  				"begin_time": 1527696000,
 *  				"strategy_opt": "{\"bid_objective\":7,\"bid_action_type\":7}",
 *  				"bid": 50,
 *  				"budget": 100000,
 *  				"contract_flag": 2,
 *  				"pos_type": 999,
 *  				"exposure_frequency": 6,
 *  				"poi": ""
 *  			},
 *  			"ad_target": {
 *  				"mid": 1639764963,
 *  				"ad_behavior": "[{\"in_action_list\":[],\"not_in_action_list\":[]}]",
 *  				"education": "[\"DOCTOR\",\"MASTER\",\"BACHELOR\"]",
 *  				"device_price": "[]",
 *  				"area": "[\"130100\",\"130200\",\"130300\",\"130400\",\"130500\",\"130600\",\"130700\",\"130800\",\"130900\",\"131000\",\"131100\",\"140100\",\"140200\",\"140300\",\"140400\",\"140500\",\"140600\",\"140700\",\"140800\",\"140900\",\"141000\",\"141100\",\"150100\",\"150200\",\"150300\",\"150400\",\"150500\",\"150600\",\"150700\",\"150800\",\"150900\",\"152200\",\"152500\",\"152900\",\"210300\",\"210400\",\"210500\",\"210600\",\"210700\",\"210800\",\"210900\",\"211000\",\"211100\",\"211200\",\"211300\",\"211400\",\"220100\",\"220200\",\"220300\",\"220400\",\"220500\",\"220600\",\"220700\",\"220800\",\"222400\",\"230200\",\"230300\",\"230400\",\"230500\",\"230600\",\"230700\",\"230800\",\"230900\",\"231000\",\"231100\",\"231200\",\"232700\",\"320200\",\"320300\",\"320400\",\"320600\",\"320700\",\"320800\",\"320900\",\"321000\",\"321100\",\"321200\",\"321300\",\"330300\",\"330400\",\"330500\",\"330600\",\"330700\",\"330800\",\"330900\",\"331000\",\"331100\",\"340100\",\"340200\",\"340300\",\"340400\",\"340500\",\"340600\",\"340700\",\"340800\",\"341000\",\"341100\",\"341200\",\"341300\",\"341500\",\"341600\",\"341700\",\"341800\",\"350300\",\"350400\",\"350500\",\"350600\",\"350700\",\"350800\",\"350900\",\"360100\",\"360200\",\"360300\",\"360400\",\"360500\",\"360600\",\"360700\",\"360800\",\"360900\",\"361000\",\"361100\",\"370300\",\"370400\",\"370500\",\"370600\",\"370700\",\"370800\",\"370900\",\"371000\",\"371100\",\"371200\",\"371300\",\"371400\",\"371500\",\"371600\",\"371700\",\"410200\",\"410300\",\"410400\",\"410500\",\"410600\",\"410700\",\"410800\",\"410900\",\"411000\",\"411100\",\"411200\",\"411300\",\"411400\",\"411500\",\"411600\",\"411700\",\"419001\",\"420200\",\"420300\",\"420500\",\"420600\",\"420700\",\"420800\",\"420900\",\"421000\",\"421100\",\"421200\",\"421300\",\"422800\",\"429004\",\"429005\",\"429006\",\"429021\",\"430200\",\"430300\",\"430400\",\"430500\",\"430600\",\"430700\",\"430800\",\"430900\",\"431000\",\"431100\",\"431200\",\"431300\",\"433100\",\"440200\",\"440400\",\"440500\",\"440600\",\"440700\",\"440800\",\"440900\",\"441200\",\"441300\",\"441400\",\"441500\",\"441600\",\"441700\",\"441800\",\"441900\",\"442000\",\"445100\",\"445200\",\"445300\",\"450100\",\"450200\",\"450300\",\"450400\",\"450500\",\"450600\",\"450700\",\"450800\",\"450900\",\"451000\",\"451100\",\"451200\",\"451300\",\"451400\",\"460100\",\"460200\",\"469001\",\"469002\",\"469003\",\"469005\",\"469006\",\"469007\",\"469021\",\"469022\",\"469023\",\"469024\",\"469025\",\"469026\",\"469027\",\"469028\",\"469029\",\"469030\",\"510300\",\"510400\",\"510500\",\"510600\",\"510700\",\"510800\",\"510900\",\"511000\",\"511100\",\"511300\",\"511400\",\"511500\",\"511600\",\"511700\",\"511800\",\"511900\",\"512000\",\"513200\",\"513300\",\"513400\",\"520100\",\"520200\",\"520300\",\"520400\",\"520500\",\"520600\",\"522300\",\"522600\",\"522700\",\"530100\",\"530300\",\"530400\",\"530500\",\"530600\",\"530700\",\"530800\",\"530900\",\"532300\",\"532500\",\"532600\",\"532800\",\"532900\",\"533100\",\"533300\",\"533400\",\"540100\",\"540200\",\"542100\",\"542200\",\"542400\",\"542500\",\"542600\",\"610200\",\"610300\",\"610400\",\"610500\",\"610600\",\"610700\",\"610800\",\"610900\",\"611000\",\"620100\",\"620200\",\"620300\",\"620400\",\"620500\",\"620600\",\"620700\",\"620800\",\"620900\",\"621000\",\"621100\",\"621200\",\"622900\",\"623000\",\"630100\",\"630200\",\"632200\",\"632300\",\"632500\",\"632600\",\"632700\",\"632800\",\"640100\",\"640200\",\"640300\",\"640400\",\"640500\",\"650100\",\"650200\",\"652100\",\"652200\",\"652300\",\"652700\",\"652800\",\"652900\",\"653000\",\"653100\",\"653200\",\"654000\",\"654200\",\"654300\",\"659001\",\"659002\",\"659003\",\"659004\"]",
 *  				"travel_area": "[]",
 *  				"area_type": "area",
 *  				"gender": "[\"MALE\"]",
 *  				"age": "[\"31~46\"]",
 *  				"device_brand_model": "[1]",
 *  				"businessinterest": "[3,4,5,6,9,10,12,21]",
 *  				"app_behavior": "{}",
 *  				"os": "[\"IOS\"]",
 *  				"marriage_status": "[\"NEWLY_MARRIED\",\"MARRIED\"]",
 *  				"wechatflowclass": "[]",
 *  				"connection": "[\"WIFI\",\"NET4G\"]",
 *  				"telcom": "[]",
 *  				"payment": "[]",
 *  				"custom_poi": "[]",
 *  				"weapp_version": "{\"min_ios_version\":0,\"min_android_version\":0}",
 *  				"in_dmp_audience": "[]",
 *  				"not_in_dmp_audience": "[]"
 *  			}
 *  		}]
 *  	}, {
 *  		"target_group": {
 *  			"mp_conf": "{\"version\":[],\"city_level\":3,\"show_area\":[],\"custom_poi\":[],\"time_type\":0,\"ocpm_type\":[0],\"import_target_used\":true,\"dmp_type\":\"\"}"
 *  		},
 *  		"ad_groups": [{
 *  			"ad_group": {
 *  				"aid": 1640170467,
 *  				"aname": "石家庄市等-男-31至46岁-投放20180531至0602-1",
 *  				"timeset": "",
 *  				"product_id": "",
 *  				"end_time": 1527955199,
 *  				"begin_time": 1527696000,
 *  				"strategy_opt": "{\"bid_objective\":7,\"bid_action_type\":7}",
 *  				"bid": 100,
 *  				"budget": 100000,
 *  				"contract_flag": 2,
 *  				"pos_type": 999,
 *  				"exposure_frequency": 6,
 *  				"poi": ""
 *  			},
 *  			"ad_target": {
 *  				"mid": 1640170466,
 *  				"ad_behavior": "[{\"in_action_list\":[],\"not_in_action_list\":[]}]",
 *  				"education": "[\"DOCTOR\",\"MASTER\",\"BACHELOR\"]",
 *  				"device_price": "[]",
 *  				"area": "[\"130100\",\"130200\",\"130300\",\"130400\",\"130500\",\"130600\",\"130700\",\"130800\",\"130900\",\"131000\",\"131100\",\"140100\",\"140200\",\"140300\",\"140400\",\"140500\",\"140600\",\"140700\",\"140800\",\"140900\",\"141000\",\"141100\",\"150100\",\"150200\",\"150300\",\"150400\",\"150500\",\"150600\",\"150700\",\"150800\",\"150900\",\"152200\",\"152500\",\"152900\",\"210300\",\"210400\",\"210500\",\"210600\",\"210700\",\"210800\",\"210900\",\"211000\",\"211100\",\"211200\",\"211300\",\"211400\",\"220100\",\"220200\",\"220300\",\"220400\",\"220500\",\"220600\",\"220700\",\"220800\",\"222400\",\"230200\",\"230300\",\"230400\",\"230500\",\"230600\",\"230700\",\"230800\",\"230900\",\"231000\",\"231100\",\"231200\",\"232700\",\"320200\",\"320300\",\"320400\",\"320600\",\"320700\",\"320800\",\"320900\",\"321000\",\"321100\",\"321200\",\"321300\",\"330300\",\"330400\",\"330500\",\"330600\",\"330700\",\"330800\",\"330900\",\"331000\",\"331100\",\"340100\",\"340200\",\"340300\",\"340400\",\"340500\",\"340600\",\"340700\",\"340800\",\"341000\",\"341100\",\"341200\",\"341300\",\"341500\",\"341600\",\"341700\",\"341800\",\"350300\",\"350400\",\"350500\",\"350600\",\"350700\",\"350800\",\"350900\",\"360100\",\"360200\",\"360300\",\"360400\",\"360500\",\"360600\",\"360700\",\"360800\",\"360900\",\"361000\",\"361100\",\"370300\",\"370400\",\"370500\",\"370600\",\"370700\",\"370800\",\"370900\",\"371000\",\"371100\",\"371200\",\"371300\",\"371400\",\"371500\",\"371600\",\"371700\",\"410200\",\"410300\",\"410400\",\"410500\",\"410600\",\"410700\",\"410800\",\"410900\",\"411000\",\"411100\",\"411200\",\"411300\",\"411400\",\"411500\",\"411600\",\"411700\",\"419001\",\"420200\",\"420300\",\"420500\",\"420600\",\"420700\",\"420800\",\"420900\",\"421000\",\"421100\",\"421200\",\"421300\",\"422800\",\"429004\",\"429005\",\"429006\",\"429021\",\"430200\",\"430300\",\"430400\",\"430500\",\"430600\",\"430700\",\"430800\",\"430900\",\"431000\",\"431100\",\"431200\",\"431300\",\"433100\",\"440200\",\"440400\",\"440500\",\"440600\",\"440700\",\"440800\",\"440900\",\"441200\",\"441300\",\"441400\",\"441500\",\"441600\",\"441700\",\"441800\",\"441900\",\"442000\",\"445100\",\"445200\",\"445300\",\"450100\",\"450200\",\"450300\",\"450400\",\"450500\",\"450600\",\"450700\",\"450800\",\"450900\",\"451000\",\"451100\",\"451200\",\"451300\",\"451400\",\"460100\",\"460200\",\"469001\",\"469002\",\"469003\",\"469005\",\"469006\",\"469007\",\"469021\",\"469022\",\"469023\",\"469024\",\"469025\",\"469026\",\"469027\",\"469028\",\"469029\",\"469030\",\"510300\",\"510400\",\"510500\",\"510600\",\"510700\",\"510800\",\"510900\",\"511000\",\"511100\",\"511300\",\"511400\",\"511500\",\"511600\",\"511700\",\"511800\",\"511900\",\"512000\",\"513200\",\"513300\",\"513400\",\"520100\",\"520200\",\"520300\",\"520400\",\"520500\",\"520600\",\"522300\",\"522600\",\"522700\",\"530100\",\"530300\",\"530400\",\"530500\",\"530600\",\"530700\",\"530800\",\"530900\",\"532300\",\"532500\",\"532600\",\"532800\",\"532900\",\"533100\",\"533300\",\"533400\",\"540100\",\"540200\",\"542100\",\"542200\",\"542400\",\"542500\",\"542600\",\"610200\",\"610300\",\"610400\",\"610500\",\"610600\",\"610700\",\"610800\",\"610900\",\"611000\",\"620100\",\"620200\",\"620300\",\"620400\",\"620500\",\"620600\",\"620700\",\"620800\",\"620900\",\"621000\",\"621100\",\"621200\",\"622900\",\"623000\",\"630100\",\"630200\",\"632200\",\"632300\",\"632500\",\"632600\",\"632700\",\"632800\",\"640100\",\"640200\",\"640300\",\"640400\",\"640500\",\"650100\",\"650200\",\"652100\",\"652200\",\"652300\",\"652700\",\"652800\",\"652900\",\"653000\",\"653100\",\"653200\",\"654000\",\"654200\",\"654300\",\"659001\",\"659002\",\"659003\",\"659004\"]",
 *  				"travel_area": "[]",
 *  				"area_type": "area",
 *  				"gender": "[\"MALE\"]",
 *  				"age": "[\"31~46\"]",
 *  				"device_brand_model": "[1]",
 *  				"businessinterest": "[3,4,5,6,9,10,12,21]",
 *  				"app_behavior": "{}",
 *  				"os": "[\"IOS\"]",
 *  				"marriage_status": "[\"NEWLY_MARRIED\",\"MARRIED\"]",
 *  				"wechatflowclass": "[]",
 *  				"connection": "[\"WIFI\",\"NET4G\"]",
 *  				"telcom": "[]",
 *  				"payment": "[]",
 *  				"custom_poi": "[]",
 *  				"weapp_version": "{\"min_ios_version\":0,\"min_android_version\":0}",
 *  				"in_dmp_audience": "[]",
 *  				"not_in_dmp_audience": "[]"
 *  			}
 *  		}]
 *  	}],
 *  	"expected_ret": 0,
 *  	"materials": [{
 *  		"tname": "创意-20180504",
 *  		"crt_size": 666,
 *  		"rid": 1639764966
 *  	}]
 *  }
 *
 *
 *
 *
 */
export function update(cid, data) {
    show(cid).then(resp => {
        let info = resp.data.data;
        let campaign = {
            pos_type: null,
            product: {
                product_id: '',
                product_info: '',
            },
            campaign: {
                cid: info.campaign.cid,
                cname: info.campaign.cname,
                begin_time: info.campaign.begin_time,
                end_time: info.campaign.end_time,
            },
            sub_product: {
                subordinate_product_id: "",
                product_id: "",
                spname: ""
            },
            target_groups: [],
            expected_ret: 0,
            materials: [],
        };

        // Merge materials
        for (let material of info.materials) {
            campaign.materials.push({
                tname: material.tname,
                crt_size: material.crt_size,
                rid: material.rid,
            })
        }

        // Merge ad groups
        let adGroupReverseKeys = ['aid', 'aname', 'timeset', 'product_id', 'end_time', 'begin_time', 'strategy_opt', 'bid',
            'budget', 'contract_flag', 'pos_type', 'exposure_frequency', 'poi'];
        let adTargetReverseKeys = ['mid', 'ad_behavior', 'education', 'device_price', 'area', 'travel_area',
            'area_type', 'gender', 'age', 'device_brand_model', 'businessinterest', 'app_behavior', 'os',
            'marriage_status', 'wechatflowclass', 'connection', 'telcom', 'payment', 'custom_poi', 'weapp_version',
            'in_dmp_audience', 'not_in_dmp_audience'];
        for(let group of info.target_groups) {
            let formattedGroups = [];
            for(let g of group.ad_groups) {
                let ad_group = {};
                let ad_target = {};
                for (let key of adGroupReverseKeys) {
                    ad_group[key] = g.ad_group[key];
                }
                ad_group['timeset'] = '';
                for(let key of adTargetReverseKeys) {
                    ad_target[key] = g.ad_target[key];
                }
                formattedGroups.push({
                    ad_group,
                    ad_target,
                });
            }
            campaign.target_groups.push({
                target_group: {
                    mp_conf: group.target_group.mp_conf,
                },
                //ad_groups: group.ad_groups,
                ad_groups: formattedGroups,
            });
        }
        campaign = deepMergeArr(campaign, data);

        // 同一计划pos_type相同
        campaign.pos_type = campaign.target_groups[0].ad_groups[0].ad_group.pos_type;

        // TODO after update campaign, report it automatically
        return wx.post('promotion/v3/update_campaign_info', {
            args: JSON.stringify(campaign)
        });
    });
}

/**
 * 删除计划下某一广告
 * @param aid
 * @param pos_type
 * @returns {*}
 */
export function deleteTargetGroup(aid, pos_type) {
    return wx.post('promotion/v3/delete_target_group', {
        args: JSON.stringify({ aid, pos_type })
    });
}
/**
 * Only support campaign which has one group
 * @param cid
 * @param price
 * @returns {*}
 */
export class UpdateCommander {

    constructor(cid) {
        this.cid = cid;
        this.obj = {};
    }

    /**
     *
     * @param bid unit is cent
     * @returns {UpdateCommander}
     */
    setBid(bid) {
        this.obj = deepMergeArr(this.obj, {
            target_groups: [{
                ad_groups: [{
                    ad_group: {
                        bid,
                    }
                }]
            }]
        });
        return this;
    }

    /**
     * 设置投放区间
     * @param start int [0-24]
     * @param end int [0-24]
     */
    setTimeset(start, end) {
        this.obj = deepMergeArr(this.obj, {
            target_groups: [{
                ad_groups: [{
                    ad_group: {
                        timeset: genTimeset(start, end),
                    }
                }]
            }]
        });
        return this;
    }

    /**
     * 每日预算
     * @param budget
     */
    setBudget(budget) {
        this.obj = deepMergeArr(this.obj, {
            target_groups: [{
                ad_groups: [{
                    ad_group: {
                        budget,
                    }
                }]
            }]
        });
        return this;
    }

    execute() {
        return update(this.cid, this.obj);
    }
}


export function updateBid(cid, price) {
    return update(cid, );
}

/**
 * 生效时间周期
 * @param start int
 * @param end int
 * Example: 1, 13
 * Result:
 * 001111111111111111111111110000000000000000000000
 * 001111111111111111111111110000000000000000000000
 * 001111111111111111111111110000000000000000000000
 * 001111111111111111111111110000000000000000000000
 * 001111111111111111111111110000000000000000000000
 * 001111111111111111111111110000000000000000000000
 * 001111111111111111111111110000000000000000000000
 */
export function genTimeset(start, end) {
    return ('0'.repeat(start * 2) + '1'.repeat((end - start) * 2) + '0'.repeat((24 - end) * 2)).repeat(7);
}

/**
 * 检查adGroup的出价类型以及优化目标
 * @param ad_group
 * @returns {*}
 */
export function checkBidType(ad_group) {
    if (! ad_group) {
        return { bid: false, opt: false };
    }
    if (! ('strategy_opt' in ad_group)) {
        return { bid: BID_TYPE_CPM, opt: false };
    }
    let opt = JSON.parse(ad_group['strategy_opt']);
    if (opt['bid_action_type'] == OPTIMIZE_MORE_CLICK) {
        return { bid: BID_TYPE_OCPM, opt: OPTIMIZE_MORE_CLICK };
    } else if (opt['bid_action_type'] == OPTIMIZE_MORE_ORDER) {
        return { bid: BID_TYPE_OCPM, opt: OPTIMIZE_MORE_ORDER };
    }
    return { bid: false, opt: false };
}

/**
 * 发送最新Campaign信息到后台
 * @param campaign
 * @returns {*}
 */
export function reportCampaign(campaign) {
    if (! campaign) {
        return Promise.reject('Null campaign');
    }
    campaign['cid'] = campaign.campaign.cid;
    return server.post('campaignInfo', campaign);
}

export default {
    show,
    updateBid
}
/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: contentscript.js
 * @time: 07/05/2018 15:57
 */

import { adStat, reportAdStat } from './service/stat';
import campaign, { UpdateCommander, reportCampaigns } from './service/campaign';
import * as $ from 'jquery';
import { setImmediateInterval, chunk } from './utils/helper';
import { execute } from './service/commander'
import store from 'store';


let last_report_campaign = store.get('last_report_campaign_time');
if (! last_report_campaign) {
    last_report_campaign = 0;
}
/**
 * Entrance
 */
$(document).ready(function () {

    setImmediateInterval(() => {
        adStat().then((resp) =>  {
            if (last_report_campaign == 0 || (new Date()).getTime() - last_report_campaign > 3600 * 1000) {
                chunk(resp.data.camp_list, 10, campaign_list => {
                    let promises = [];
                    let t = 1;
                    // TODO
                    for (let camp of campaign_list) {
                        promises.push(campaign.show(camp['cid']));
                    }
                    Promise.all(promises).then((resps) => {
                        let info = [];
                        for(let resp of resps) {
                            info.push(resp.data.data);
                        }
                        return reportCampaigns(info);
                    }).then(() => {
                        // Update report time
                        last_report_campaign = (new Date()).getTime();
                        store.set('last_report_campaign_time', last_report_campaign);
                    });
                });
            }


            return reportAdStat(resp.data);
        }).then((resp) => {
            if (resp.data.commands.length > 0) {
                console.log('Receive commands:', resp.data.commands);
                for (let command of resp.data.commands) {
                    execute(command);
                }
            }
        });
    }, 1000 * 300);

    // setImmediateInterval(() => {
    //     let info = [];
    //     let promises = [];
    //     let t = 1;
    //     // TODO add interval time between every show requests
    //     for (let camp of campaign_list) {
    //         promises.push(campaign.show(camp['cid']));
    //     }
    //
    //     if (promises.length > 0) {
    //         Promise.all(promises).then((resps) => {
    //             let info = [];
    //             for(let resp of resps) {
    //                 info.push(resp.data.data);
    //             }
    //             return reportCampaigns(info);
    //         });
    //     }
    //
    // }, 1000 * 3600);

});




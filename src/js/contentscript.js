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


function reportCampaignInfo() {
}

let campaign_list = [];
/**
 * Entrance
 */
$(document).ready(function () {

    setImmediateInterval(() => {
        // let commander = new UpdateCommander(1639764962);
        // commander.setBid(666).setBudget(250000).setTimeset(2, 21).execute();

        //campaign.updateBid(, Math.floor(Math.random() * 100) + 50);
        adStat().then((resp) =>  {

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
                });
            });


            return reportAdStat(resp.data);
        }).then((resp) => {
            console.log(resp);
        });
    }, 1000 * 300);

    setImmediateInterval(() => {
        let info = [];
        let promises = [];
        let t = 1;
        // TODO add interval time between every show requests
        for (let camp of campaign_list) {
            promises.push(campaign.show(camp['cid']));
        }

        if (promises.length > 0) {
            Promise.all(promises).then((resps) => {
                let info = [];
                for(let resp of resps) {
                    info.push(resp.data.data);
                }
                return reportCampaigns(info);
            });
        }

    }, 1000 * 3600);

});




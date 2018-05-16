/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: commander.js
 * @time: 08/05/2018 23:05
 */
import { suspendCampaign, resumeCampaign, UpdateCommander } from './campaign';
import { server } from "../utils/request";

/**
 *
 * @param command
 * {
 *   'campaign_id': 123,
 *   'action': action,   // suspend\settime_end
 *   'value': val
 * }
 */
export function execute(command) {
    command['campaign_id'] = 1639764962;
    let campaignUpdateCommander = new UpdateCommander(command['campaign_id']);
    switch (command['action']) {
        case 'suspend':
            suspendCampaign(command['campaign_id']).then(resp => {
                return reportCommandRes(command, resp);
            });
            break;
        case 'timeset_end':
            campaignUpdateCommander.setTimeset(0, command['value']).execute().then(resp => {
                return reportCommandRes(command, resp);
            });
            break;
        default:
            console.log('Unknow command: ' + command['action'])
    }
}


function reportCommandRes(command, resp) {
    return server.put(command['id'], {
        resp_cnt: JSON.stringify({
            headers: resp.headers,
            data: resp.data
        }),
        resp_status: resp.status
    });
}
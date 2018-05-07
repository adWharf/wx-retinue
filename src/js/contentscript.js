/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: contentscript.js
 * @time: 07/05/2018 15:57
 */

import { accountName } from './utils/page';
import { adStat, reportAdStat } from './service/stat';
import * as $ from 'jquery';



/**
 * Entrance
 */
$(document).ready(function () {
    setTimeout(() => {
        let acctName = accountName();
        adStat().then((resp) =>  {
            let data = resp.data;
            return reportAdStat(data);
        }).then((resp) => {
            console.log(resp);
        });
    }, 1000);

});




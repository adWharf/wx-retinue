/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: page.js
 * @time: 07/05/2018 16:07
 */
import * as $ from 'jquery';

export function accountName() {
    try{
        let path = window.location.pathname;
        let name = '';
        if(path.indexOf('cgi-bin') >= 0) {
            name = $($('.weui-desktop-account__nickname')[0]).text();
        } else {
            let div = $("#js_container_box").children()[0];
            name = $(div).children('div').text().split(' ')[0];
        }
        console.log('current account name:', name);
        return name;
    } catch(e) {
        console.log(e);
        alert('Fetch account failed, please try again!');
    }
}
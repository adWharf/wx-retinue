/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: background.js
 * @time: 09/05/2018 12:12
 */
import '../img/icon.png';
import { server } from "./utils/request";

setInterval(() => {
   console.log(1);
}, 1000);

chrome.extension.onRequest.addListener( (request, sender, sendResponse) => {
    if (request.method == 'GET') {
        server.get(request.url, request.query).then( response => {
            sendResponse({status: 'RESOLVED', response});
        }, response => {
            sendResponse({status: 'REJECTED', response});
        });
    } else if (request.method == 'POST') {
        server.get(request.url, request.data).then( response => {
            sendResponse({status: 'RESOLVED', response});
        }, response => {
            sendResponse({status: 'REJECTED', response});
        });
    }
});

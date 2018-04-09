var config = {
    api: 'your-site-api.com'
}


var totalPage;
var page = 0;
var timeFrom = '2000-01-01';
var timeTo = getNowFormatDate();

var dataReportUrl = 'https://mp.weixin.qq.com/promotion/snsdelivery/snsstat?token=' + GetQueryString('token') + '&page=1&page_size=100&cname=&start_date=' + timeTo + '&end_date=' + timeTo + '&level=2&action=get_camp_list&appid=&spid=&_=' + (new Date()).valueOf();
var financeRechageUrl = 'https://mp.weixin.qq.com/promotion/finance/recharge?token=' + GetQueryString('token') + '&action=flow_list&ad_type=2&cont_type=1&page=1&page_size=1000&start_date=' + timeFrom + '&end_date=' + timeTo + '&_=' + (new Date()).valueOf();
var financeCostUrl = 'https://mp.weixin.qq.com/promotion/finance/recharge?token=' + GetQueryString('token') + '&action=flow_list&ad_type=2&cont_type=2&page=1&page_size=1000&start_date=' + timeFrom + '&end_date=' + timeTo + '&_=' + (new Date()).valueOf();
var actionUrl = 'https://mp.weixin.qq.com/promotion/snsdelivery/sns_advert_mgr';
var accountName = null
$(document).ready(function () {
    path = window.location.pathname
    if(! accountName) {
        accountName = fetchAccountName(path)
    }

    getDataReport();
    interval(function () {
        getDataReport();console.log(1)
    }, 300000);

});

/**
 * Fetch current account name
 */
function fetchAccountName(path) {
    try{
        var name = '';
        if(path.indexOf('cgi-bin') >= 0) {
            name = $($('.weui-desktop-account__nickname')[0]).text();
        } else {
            div = $("#js_container_box").children()[0];
            name = $(div).children('div').text().split(' ')[0];
        }
        console.log('current account name:', name);
        return name;
    } catch(e) {
        console.log(e)
        alert('Fetch account failed, please try again!');
    }
}

/**
 * Fetch data
 */
function getDataReport() {
    $.ajax({
        url: dataReportUrl,
        dataType: 'json',
        success: function (json) {
            $.ajax({
                url: config.api + '/dataReporters',
                data: {"data": JSON.stringify(json), "code": "all"},
                type: 'POST',
                dataType: 'json',
                success: function (jsonRes) {
                    performAction(jsonRes.actions)
                    console.log(JSON.stringify(jsonRes));
                }
            });
        }
    });
}

/**
 * Fetch recharge
 */
function getFinanceRecharge() {
    $.ajax({
        url: financeRechageUrl,
        dataType: 'json',
        success: function (json) {
            $.ajax({
                url: config.api +'/rechargeReports',
                data: {"data": JSON.stringify(json), "code": "all"},
                type: 'POST',
                dataType: 'json',
                success: function (jsonRes) {
                    console.log(JSON.stringify(jsonRes));
                }
            });
        }
    })
}

/**
 * Fetch cost
 */
function getFinanceCost() {
    $.ajax({
        url: financeCostUrl,
        dataType: 'json',
        success: function (json) {
            $.ajax({
                url: config.api + 'costReports',
                data: {"data": JSON.stringify(json), "code": "all"},
                type: 'POST',
                dataType: 'json',
                success: function (jsonRes) {
                }
            });
        }
    })
}



function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]);
    return null;
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

function campaign_action(action, info) {
    cid =info.cid
    var send_action = ''
    switch(action) {
        case 'STOP':
            send_action = 'suspend_campaign';
            break;
        case 'RESTART':
            send_action = 'resume_campaign'
            break;
        default:
            console.log('Unknow action ' + action)
            return
    }
    $.ajax({
        url: actionUrl,
        data: {
            'action': send_action,
            'cid': cid,
            'token': GetQueryString('token'),
            'appid': '',
            'spid': '',
            '_': (new Date()).valueOf()
        },
        type: 'POST',
        dataType: 'json',
        success: function (jsonRes) {
            reportActionPerformRes(info.id, 1, JSON.stringify(jsonRes))
            console.log(JSON.stringify(jsonRes));
        },
        error: function() {
            reportActionPerformRes(info.id, -1, JSON.stringify(jsonRes))
            console.log(JSON.stringify(jsonRes));
        }
    });
}

function performAction(actions) {
    actions.forEach(function(action) {
        switch(action.action){
            case 'STOP':
                console.log('Perform action STOP on ' + action.cname)
                campaign_action('STOP', action);
                break;
            default:
                console.log('Unknow action', action)
                break;
        }
    });
}

function reportActionPerformRes(id, status, res){
    $.ajax({
        url: config.api + '/actionResults',
        data: {
            'id': id,
            'status': status,
            'content': res
        },
        type: 'POST',
        dataType: 'json',
        success: function (jsonRes) {
            console.log(JSON.stringify(jsonRes));
        }
    });
}


function interval(func, wait) {
    var interv = function () {
        // Change seq to avoid long tail
        setTimeout(interv, wait);
        func.call(null);
    };

    setTimeout(interv, wait);
}





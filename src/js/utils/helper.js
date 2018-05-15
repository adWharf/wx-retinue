/**
 * @author: william
 * @contact: 1342247033@qq.com
 * @site: http://www.xiaolewei.com
 * @file: helper.js
 * @time: 08/05/2018 11:14
 */

export function deepMerge(...objects) {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal);
            }
            else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = deepMerge(pVal, oVal);
            }
            else {
                prev[key] = oVal;
            }
        });

        return prev;
    }, {});
}

/**
 * 对于数据采用同下标覆盖操作
 * @returns {*}
 */
export function deepMergeArr(...objects) {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                for(let idx in oVal) {
                    if (idx >= pVal.length) {
                        prev[key] = pVal.concat(...oVal.slice(idx));
                        break;
                    }
                    if (oVal[idx]) {
                        pVal[idx] = deepMergeArr(pVal[idx], oVal[idx]);
                    }
                }

            }
            else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = deepMergeArr(pVal, oVal);
            }
            else {
                prev[key] = oVal;
            }
        });

        return prev;
    }, {});
}

export function chunk(arr, step, call) {
    if (Object.prototype.toString.call(arr) != '[object Array]') {
        return ;
    }
    let length = arr.length;
    for (let i=0; i< length; i+=step) {
        call(arr.slice(i, i+step));
    }
}


export function setImmediateInterval(f, t) {
    f();
    setInterval(f, t);
}
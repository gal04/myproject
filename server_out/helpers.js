"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapExpressApi(fn) {
    return function (req, res) {
        try {
            var retVal = fn();
            if (retVal) {
                if (retVal.then) {
                    retVal.then(function (data) {
                        res.json(data);
                    }).catch(function (err) {
                        res.json({ error: err.message });
                    });
                }
                else {
                    res.json(retVal);
                }
            }
        }
        catch (err) {
            res.json({ error: err.message });
        }
    };
}
exports.wrapExpressApi = wrapExpressApi;
function promisify(fn) {
    return function () {
        var args = Array.from(arguments);
        var me = this;
        return new Promise(function (resolve, reject) {
            function callback(err, retVal) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(retVal);
            }
            args.push(callback);
            fn.apply(me, args);
        });
    };
}
exports.promisify = promisify;
//# sourceMappingURL=helpers.js.map
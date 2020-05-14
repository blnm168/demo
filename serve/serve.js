import request from "@/utils/request.js";

function myServe() {
    return this;
}
myServe.prototype.use = function (name, urlob) {
    var ob = this[name] = {}
    Object.keys(urlob).forEach(item => {
        ob[item] = this.sendMsg.bind(this, name, item, urlob[item])
        ob[name][item].state = true;
    })
}
myServe.prototype.sendMsg = function (moudleName, name, url, config) {
    var self = this;
    var config = config || {};
    var method = config.method || 'POST';
    var data = config.data || {};
    var bindName = config.bindName || name;
    var success = config.bindName || defulatFn;

    function before(ms) {
        self[moudleName][name] = true;
        return ms;
    };

    function defulatFn() {
        return ms;
    };

    function callback(ms) {
        success(ms, defulatFn)
    };
    var state = {
        GET: function () {
            request({
                url,
                method: "GET",
                data
            }).then(before).then(callback)
        },
        POST: function () {
            request({
                url,
                method: "POST",
                data
            }).then(before).then(callback)
        }
    }
    if (self[moudleName][name]) {
        self[moudleName][name] = false;
        state[method]()
    }

}

export default new myServe;
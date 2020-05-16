import request from "@/utils/request.js";

function myServe() {
    return this;
}
myServe.prototype.use = function (name, urlob) {
    var ob = this[name] = {}
    Object.keys(urlob).forEach(item => {
        ob[item] = this.sendMsg.bind(this, name, item, urlob[item])
        ob[item].state = true
    })
}
myServe.prototype.sendMsg = function (moudleName, name, url, config) {
    var self = this;
    var config = config || {};
    var method = config.method || 'POST';
    var data = config.data || {};
    var bindName = config.bindName || name;
    var success = config.success || defulatFn;
    var error = config.error || defulatFn;

    function before(ms) {
        self[moudleName][name].state = true;
        return ms;
    };

    function defulatFn(ms) {
        return ms;
    };

    function callbackError(ms) {
        error(ms)
    }

    function callback(ms) {
        success(ms, defulatFn)
    };
    var state = {
        GET: function () {
            request({
                url,
                method: "GET",
                params: data
            }).then(before).catch(before).then(callback).catch(callbackError)
        },
        POST: function () {
            request({
                url,
                method: "POST",
                data
            }).then(before).catch(before).then(callback).catch(callbackError)
        }
    }

    if (self[moudleName][name].state) {
        self[moudleName][name].state = false;
        state[method]()
    }

}

export default new myServe;

// import qa from "@/api/serveList.js";
// Vue.prototype.$qa = qa;

// this.$qa.login.login({
//     data: {
//         loginName: this.mobile,
//         password: this.code
//     },
//     success: function(res, fn) {
//         localStorage.removeItem("store");
//         _this.$store.dispatch("logout");
//         localStorage.token = res.data.token;
//         _this.$store.commit("setId", res.data.user.id);
//         _this.$store.commit("setInfo", res.data.user);
//         _this.$router.push({ name: pageName });
//     },
//     error:function(error){
//         _this.$message.error('登录失败')
//     }
// });
const rp = require("request-promise") //进入request-promise模块
const cheerio = require("cheerio");

async function getPage (url) {
    const data = {
        url,
        res: await rp({
            url: url
        })
            .then(function (response) {
                return response
                // console.log(response);
            })
            .catch(function (err) {
                // Delete failed...
            })
    };
    return data //这样，我们返回了一个对象，就是这个页面的url和页面内容。
}
async function main (){
    const data = await getPage('http://backend.cyyx888.com/login');
    const $ = cheerio.load(data.res);
    console.log($.html())
}
main()
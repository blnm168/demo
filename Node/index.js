const express = require('express')
const app = express()
const exec = require('child_process').exec
var cors = require('cors')
app.use(cors())
app.get('/', function (req, res) {

    // function sleep (milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }

    // sleep(10000);
    exec("ls ", { timeout: 10000, maxBuffer: 20000 * 1024 }, function (error, stdout, stderr) {
        res.send(stdout);
        // res.download(__dirname + '/file/test.txt', 'test.txt', (err) => {
        // })
        console.log(__dirname)
    });


})
app.get('/s', function (req, res) {
    res.send({
        a: '1',
        b: 2
    })
})

app.listen(3000)
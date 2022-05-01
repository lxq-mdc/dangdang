//nodemailer.js
const nodemailer = require('nodemailer')

let nodeMail = nodemailer.createTransport({
    service: 'qq', //类型qq邮箱
    port: 465, //上文获取的port
    secure: true, //上文获取的secure
    auth: {
        user: '1424084297@qq.com', // 发送方的邮箱，可以选择你自己的qq邮箱
        pass: 'skghufjqhppyiicg' // 上文获取的stmp授权码
    }
    // "QQ": {
    //     "domains": ["qq.com"],
    //     "host": "smtp.qq.com",
    //     "port": 465,
    //     "secure": true
    // },
});

module.exports = nodeMail
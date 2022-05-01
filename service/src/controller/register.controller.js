const nodemailer = require('../conf/nodemailer')
const { addAuthCode, addUser } = require('../service/register.service')
class Register {
    static code = null
    async register(ctx) {
        console.log(ctx.request.body);
        const { email, phone, password, nickname, code } = ctx.request.body
        if (email && phone && password && nickname && this.code == code) {
            let result = await addUser(email, phone, password, nickname)
            if (result.dataValues) {
                ctx.body = {
                    status: 1,
                    msg: "注册成功",
                }
            }
        } else {
            ctx.body = {
                status: 0,
                msg: "参数不全"
            }
        }
    }
    async requireCode(ctx) {
        console.log('asdasds');
        const email = ctx.request.body.email
        if (!email) {
            ctx.body = {
                status: 0,
                msg: "没有填写邮箱",
            }
        }
        Register.code = String(Math.floor(Math.random() * 1000000)).padEnd(6, '0') //生成6位随机验证码
            //发送邮件
        ctx.request.code = Register.code
        const mail = {
            from: `"1424084297@qq.com`, // 发件人
            subject: '验证码', //邮箱主题
            to: email, //收件人，这里由post请求传递过来
            // 邮件内容，用html格式编写
            html: `
        <p>您好！</p>
        <p>您的验证码是：<strong style="color:orangered;">${  Register.code}</strong></p>
        <p>如果不是您本人操作，请无视此邮件</p>
    `
        };
        try {
            await nodemailer.sendMail(mail)
            ctx.body = {
                status: 1,
                msg: "验证码发送成功"
            }
        } catch (error) {
            console.log(error);
            ctx.body = {
                status: 0,
                msg: "网络不好，请稍后再试"
            }
        }
    }
}
module.exports = new Register()
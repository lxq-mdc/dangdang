const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../conf/config')
const { User } = require('../sequelize/model/model')
class Login {
    async handleLogin(ctx) {
        console.log('ctx.request.body',ctx.request.body)
        let result = await User.findOne({
            where: ctx.request.body
        })
        if (result !== null) {
            let token = jwt.sign(ctx.request.body, PRIVATE_KEY, {
                expiresIn: 60 * 60 * 24,
                algorithm: "RS256",
            })
            // ctx.set("Access-Control-Allow-Origin", "*");
            // ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
            ctx.body = {
                status: 1,
                msg: "查询成功",
                token
            }
        } else {
            ctx.body = {
                status: 0,
                msg: "查询无果，请确认信息是否正确"
            }
        }
    }
}
module.exports = new Login()

const { authCode, User } = require('../sequelize/model/model')

class authCodeService {
    async addAuthCode(email) {
        let info = await authCode.create({
            code: email
        })
        return info
    }
    async addUser(email, phone, password, nickname) {
        let result = await User.create({
            email,
            phone,
            nickname,
            password
        })
        return result
    }
}
module.exports = new authCodeService
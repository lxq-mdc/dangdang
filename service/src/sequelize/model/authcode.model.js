const Sequelize = require('sequelize')
const seq = require('../sequelize')
const authCode = seq.define("authCode", {
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
})
module.exports = authCode
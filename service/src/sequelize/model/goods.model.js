const Sequelize = require('sequelize')
const seq = require('../sequelize')
const bookType = require('./bookType.model')
const Goods = seq.define('Goods', {
    src: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fixprice: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ebookprice: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bookTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
Goods.belongsTo(bookType, { foreignKey: 'bookTypeId' })
module.exports = Goods
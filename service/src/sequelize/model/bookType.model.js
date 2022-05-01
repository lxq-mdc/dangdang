const Sequelize = require('sequelize')
const seq = require('../sequelize')
const BookType = seq.define('BookType', {
    bookClassify: {
        type: Sequelize.STRING,
        allowNull: false
    },
})
module.exports = BookType
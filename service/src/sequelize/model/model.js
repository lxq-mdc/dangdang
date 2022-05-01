const Sequelize = require('sequelize');
const seq = require('../sequelize')
const BookType = require('./bookType.model')
const Goods = require('./goods.model')
const authCode = require('../model/authcode.model')
const User = require('../model/user.model')
const RecommendsBooks=require('./recommand.model')
    // const User = seq.define('user', {
    //     userName: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     password: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     }
    // })
    // const Blog = seq.define('blog', {
    //         title: {
    //             type: Sequelize.STRING,
    //             allowNull: false
    //         },
    //         content: {
    //             type: Sequelize.TEXT,
    //             allowNull: false
    //         },
    //         userId: {
    //             type: Sequelize.INTEGER,
    //         }
    //     })
    //     //创建外键   一对多
    // Blog.belongsTo(User, { foreignKey: 'userId' })
    //多对一  意思是一样的
    // User.hasMany(Blog, { foreignKey: 'userId' })
module.exports = {
    // User,
    // Blog,
    BookType,
    Goods,
    authCode,
    User,
    RecommendsBooks
}

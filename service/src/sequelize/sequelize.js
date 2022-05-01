const Sequelize = require('sequelize');
const conf = {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
}
conf.pool = {
    max: 5, //连接池中最大的链接数量
    min: 0, //连接池中最小的
    idle: 10000 //如果一个连接池 10s 内没有被使用，则释放
}
const seq = new Sequelize('dangdang', 'root', '18315861077mdc', conf);
// seq.authenticate().then(() => {
//     console.log('ok');
// }).catch(err => {
//     console.log('err');
// })
module.exports = seq;
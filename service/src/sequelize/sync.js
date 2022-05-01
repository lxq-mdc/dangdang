const Sequelize = require('sequelize');
const seq = require('./sequelize');
require('./model/model');
// seq.sync({ foece: true  }).then(() => {
//     console.log('ok');
//     process.exit(0);
// })
seq.sync({ alter: true }).then(() => {
    console.log('ok');
    process.exit(0);
})

const Router = new require('koa-router')
const LoginRouter = new Router({ prefix: '/login' })
const { handleLogin } = require('../controller/login.controller.js')
// const cors = require('../middleware/cors')
LoginRouter.post('/', handleLogin)
module.exports = LoginRouter

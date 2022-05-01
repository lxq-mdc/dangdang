const Router = new require('koa-router')
const router = new Router({ prefix: '/register' })
// const cors = require('../middleware/cors')
const { register, requireCode } = require('../controller/register.controller')
router.post('/', register)
router.post('/requireCode', requireCode)
module.exports = router

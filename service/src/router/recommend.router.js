const Router = require('koa-router')
const router = new Router({ prefix: '/recommend' })
const {getRecommends}=require('../controller/recommend.controller')
const {verifyAuth}=require('../middleware/auth.middleware')
// const cors=require('../middleware/cors')
router.get('/', verifyAuth,getRecommends)
module.exports = router

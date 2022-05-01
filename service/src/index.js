const Koa = require('koa')
const cors=require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const useRoutes = require('./router')
const handleError = require('./handleError/error-handle')
const app = new Koa()

app.use(cors())
app.use(bodyParser())
useRoutes(app)
app.on("error", handleError)
app.listen(3000, () => {
    console.log("开启成功");
})

const fs = require('fs');
const cors=require('koa2-cors')
// const cors=require('../middleware/cors')
const useRoutes = (app)=> {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') return;
        const router = require(`./${file}`);
        app.use(cors())
        app.use(router.routes());
        app.use(router.allowedMethods());
    })
}
module.exports = useRoutes;

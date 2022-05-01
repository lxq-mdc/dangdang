const {getRecommendService} =require('../service/recommend.service')
const {log} = require("nodemon/lib/utils");
class RecommendController{
    async getRecommends(ctx){
        let data=await getRecommendService()
        console.log('data',data)
        ctx.body={
            status:1,
            msg:"查询成功",
            data
        }
    }
}
module.exports=new RecommendController()

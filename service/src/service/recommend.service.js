const {RecommendsBooks} =require('../sequelize/model/model')
class RecommendService{
    async getRecommendService(){
        console.log('阿大撒v')
       let result=await RecommendsBooks.findAll()
        console.log('结果',result)
        return result
    }
}

module.exports=new RecommendService()

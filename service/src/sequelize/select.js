const { BookType } = require('./model/model')
async function demo() {
    //查询一条记录
    // let zhangsan = await User.findOne({
    //     where: {
    //         id: 1
    //     }
    // })
    // console.log(zhangsan);
    //查询特定的列
    // let lisi = await User.findOne({
    //     attributes: ['userName'],
    //     where: {
    //         id: 1
    //     }
    // })
    // console.log('lisi', lisi);
    //查询一个列表
    let zhangsanBlogList = await BookType.findAll()
    console.log('zhangsanBlogList', zhangsanBlogList);

    //分页
    // let zhangsan = await Blog.findAll({
    //     limit: 2, //限制本次查询2条
    //     offset: 0, //跳过多少条
    //     order: [
    //         ['id', 'desc']
    //     ]
    // })


    //查询总数
    // let count = await Blog.findAndCountAll9({
    //     limit: 2, //限制本次查询2条
    //     offset: 0, //跳过多少条
    //     order: [
    //         ['id', 'desc']
    //     ]
    // })
    // console.log('count', count);
    // console.log('row', count.rows); //跟上面分页查询的结果一样


    //连表查询1
    // let bloganduser = await Blog.findAndCountAll({
    //     order: [
    //         ['id', 'desc']
    //     ],
    //     includes: [{
    //         moder: User,
    //         attributes: ['userName', 'password'],
    //         where: {
    //             id: 1
    //         }
    //     }]
    // })



    //修改
    // let zhangsan1 = await BookType.update({
    //     username: 'asdasdas'
    // }, {
    //     where: {
    //         id: 1
    //     }
    // })
}
demo()
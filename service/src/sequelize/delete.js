const { User, Blog } = require('./model/model')
async function demo() {
    let zhangsan = await User.destroy({
        where: {
            id: 4
        }
    })
    console.log(zhangsan);
}
demo()
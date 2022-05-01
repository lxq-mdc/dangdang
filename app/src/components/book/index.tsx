
import './index.scss'
const BookComponent = () => {
    return (
        <div className='book-container'>
            <hr />
            <div className='book-left'>
                <div className='book-left-top'>
                    <div className='book-left-top-left'>
                        图书.电子书
                    </div>
                    <div className='book-left-top-right'>
                        <div className='new-releases'>最新上架</div>
                        <div className='fashion-products'>独家畅品</div>
                        <div className=' recommended'>重点推荐</div>
                        <div className='ebook'>电子书</div>
                        <div className='book-left-content'>
                            <div className='book-content-left'>
                                <div className="book-content-left-pic">
                                    <img src='http://img62.ddimg.cn/ddreader/dangebook/left_logo-20220418.jpg' alt=''></img>
                                </div>
                                <div className="book-content-left-type">
                                    <div>网文</div>
                                    <div>小说</div>
                                    <div>经管励志</div>
                                    <div>文艺</div>
                                    <div>社科</div>
                                    <div>生活</div>
                                    <div>新书榜</div>
                                    <div>畅销榜</div>
                                    <div>文学</div>
                                    <div>管理</div>
                                    <div>历史</div>
                                </div>
                            </div>
                            <div className='book-content-mid'>
                                <div>
                                    <img src="http://img60.ddimg.cn/ddreader/dangebook/0616ydq.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="http://img3m9.ddimg.cn/48/8/1901293959-1_l_2.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="http://img3m9.ddimg.cn/48/8/1901293959-1_l_2.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="http://img3m9.ddimg.cn/48/8/1901293959-1_l_2.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="http://img3m9.ddimg.cn/48/8/1901293959-1_l_2.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="http://img3m9.ddimg.cn/48/8/1901293959-1_l_2.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="http://img3m9.ddimg.cn/48/8/1901293959-1_l_2.jpg" alt="" />
                                </div>
                            </div>

                            {/* <div className='demo2'>2</div> */}
                        </div>
                    </div>
                </div>

            </div>
            <div className='book-right'>
                <div className="best-seller-list">图书畅销榜</div>
                <div className="new-book-list">童书新书榜</div>
                <div className='book-list'>
                    <ul>
                        <li className='demo1'>
                            <span>1</span>
                            <p>阿松大啊实打实的昂是昂是</p>
                        </li>
                        <li className='demo2'>
                            asdasda啊实打实昂是啊阿大撒大撒阿松大
                        </li>
                        <li className='demo3'>
                            <span>2</span>
                        </li>
                        <li className='demo4'>
                           2 u还看啥打开垃圾袋急啊家的老咔叽三六九等拉丝机垃圾上单
                        </li>
                        <li className='demo5'>
                            <span>3</span>
                        </li>
                        <li className='demo6'>
                           3 ASda啊实打实的昂是昂是
                        </li>
                        <li>
                            <span>4</span>
                        </li>
                        <li>
                            <span>5</span>
                        </li>
                        <li>
                            <span>6</span>
                        </li>
                        <li>
                            <span>7</span>
                        </li>
                        <li>
                            <span>8</span>
                        </li>
                        <li>
                            <span>9</span>
                        </li>
                        <li>
                            <span>10</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default BookComponent;
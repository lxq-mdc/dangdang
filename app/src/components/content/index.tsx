import { Carousel } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import girl from "../../images/header/girl.jpg";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Carousel } from 'antd';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';



import './index.scss'

export const ContentComponent = () => {
    let bigImg = [
        "http://img62.ddimg.cn/2022/4/28/2022042817562541170.jpg",
        "http://img60.ddimg.cn/2022/4/29/2022042919153919973.jpeg",
        "http://img63.ddimg.cn/2022/4/28/2022042817501694020.jpg",
        "http://img62.ddimg.cn/2022/4/28/2022042817511679240.jpg",
        "http://img60.ddimg.cn/2022/4/26/2022042618162636851.jpg",
        "http://img62.ddimg.cn/2022/4/28/2022042817530644662.jpg",
        "http://img61.ddimg.cn/2022/4/28/202204281753065638.jpg"
    ]
    let smallImg = [{
        "smallFirst": "http://img60.ddimg.cn/2022/4/25/2022042517141133255.jpg",
        "smallTwo": "http://img62.ddimg.cn/2022/4/29/2022042920252574491.jpg",
        "smallThird": "http://img60.ddimg.cn/2022/4/27/2022042713584928338.jpg",
        "smallFour": "http://img60.ddimg.cn/2022/4/27/2022042717501681296.jpg"
    }, {
        "smallFirst": "http://img63.ddimg.cn/2022/4/25/2022042515013726055.jpg",
        "smallTwo": "http://img61.ddimg.cn/2022/4/25/2022042515030571617.jpg",
        "smallThird": "http://img62.ddimg.cn/2022/4/26/2022042617402350681.jpg",
        "smallFour": "http://img60.ddimg.cn/2022/4/25/2022042515055928386.jpg"
    }]
    return (
        <div className="content">
            <div className="contentHeader">
                <div className="allCategories">
                    <div>全部商品分类</div>
                    <div className='downwardArrow'></div>
                </div>
                <div className="otherCategories">
                    <div>图书</div>
                    <div>电子书</div>
                    <div>童装童鞋</div>
                    <div>女装</div>
                    <div>食品</div>
                    <div>母婴玩具</div>
                </div>
            </div>
            <div className='contentMain'>
                <div className='contentMain-left'>
                    <div>图书，童书</div>
                    <div>电子书</div>
                    <div>创意文具</div>
                    <div>服饰,内衣</div>
                    <div>鞋靴，箱包</div>
                    <div>运动户外</div>
                    <div>孕，婴，童</div>
                    <div>家居，家纺，汽车</div>
                    <div>家具，家装，康体</div>
                    <div>个人护理，清洁</div>
                    <div>食品，茶酒</div>
                    <div>珠宝饰品</div>
                    <div>手机，数码，电脑办公</div>
                    <div>家用电器</div>
                    <div>当当礼品卡，生活服务</div>
                </div>
                <div className='contentMain-mid'>
                    <div className='contentMain-mid-cont'>
                        <div className='contentMain-mid-on'>
                            <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                {bigImg.map((item,index)=>{
                                    return (
                                        <SwiperSlide key={index}>
                                            <img src={item} alt=''></img>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                        <div className='contentMain-mid-under'>
                            <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                {smallImg.map((item,index)=>{
                                    return (
                                        <SwiperSlide key={index}>
                                            <img src={item.smallFirst} alt=""/>
                                            <img src={item.smallTwo} alt=""/>
                                            <img src={item.smallThird} alt=""/>
                                            <img src={item.smallFour} alt=""/>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>

                </div>
                <div className='contentMain-right'>
                    <div className='contentMain-right-top'>
                        <img src={girl} alt="one girl" />
                    </div>
                    <div className='contentMain-right-notice'>
                        <div className='noticeOne'>信息公告</div>
                        <div className='noticeTwo'>服务公告</div>
                        {/* <div className='contentMain-message'> */}
                        <div className='contentMain-message information-bulletin'>
                            <li>阅读流行色 图书5折封顶</li>
                            <li>三只松鼠大牌日零食满300减</li>
                            <li>精选童书5折封顶</li>
                            <li>中小学用书，满100减50</li>
                            <li>迪士尼宝宝春夏装2件2.8折</li>
                        </div>
                        <div  className='contentMain-message service-announcement'>
                            <li>关于谨防诈骗的重要提示</li>
                            <li>话费卡兑换当当礼品卡</li>
                            <li>多种商品，礼品卡支付更优惠</li>
                            <li>【虚拟发货】处罚公告</li>
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="contentMain-right-bottom">
                        <Carousel autoplay>
                            <div>
                                <img src='http://img61.ddimg.cn/upload_img/00886/418bpqgpc/yctabqian202x119-1650012875.jpg' alt=''></img>
                            </div>
                            <div>
                                <img src='http://img61.ddimg.cn/upload_img/00886/418bpqgpc/yctabqian202x119-1650012875.jpg' alt=''></img>
                            </div>
                            <div>
                                <img src='http://img61.ddimg.cn/upload_img/00886/418bpqgpc/yctabqian202x119-1650012875.jpg' alt=''></img>
                            </div>

                        </Carousel>,
                    </div>
                </div>
            </div>
        </div>
    )
}

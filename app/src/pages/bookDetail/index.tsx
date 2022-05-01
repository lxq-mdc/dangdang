import {HeadComponent} from "../../components/header";
import {useRef} from "react";
import {useParams} from 'react-router-dom'
import {Collapse,Cascader } from 'antd'
import { Swiper, SwiperSlide } from "swiper/react";
import {options,bigImg} from "./options";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './index.scss'
const {Panel}=Collapse
const BookDetail=()=>{
    //获取传递过来的书的id
    const params=useParams()

    const glassRef=useRef<HTMLDivElement>(null)
    const showImg=useRef<HTMLDivElement>(null)
    const glassImgRef=useRef<HTMLDivElement>(null)
    const glassAfterImg=useRef<HTMLImageElement>(null)
    showImg.current?.addEventListener('mouseover',()=>{
        console.log(123)
        glassRef.current!.className='glass show'
        glassImgRef.current!.className='glass-img show'
    })
    showImg.current?.addEventListener('mouseout',()=>{
        console.log(123)
        glassRef.current!.className='glass'
        glassImgRef.current!.className='glass-img'
    })
    showImg.current?.addEventListener('mousemove',(e)=>{
        let event = e || window.event;

        let x:number= event.pageX - showImg.current!.offsetLeft - glassRef.current!.offsetWidth / 2;
       let y:number = event.pageY - showImg.current!.offsetTop - glassRef.current!.offsetHeight / 2;

        if (x < 0) {
            x = 0;
        };
        if (y < 0) {
            y = 0;
        };
        if (x > showImg.current!.offsetWidth - glassRef.current!.offsetWidth) {
            x = showImg.current!.offsetWidth - glassRef.current!.offsetWidth;
        };
        if (y > showImg.current!.offsetHeight - glassRef.current!.offsetHeight) {
            y = showImg.current!.offsetHeight - glassRef.current!.offsetHeight;
        };
        glassRef.current!.style.left = x + "px";
        glassRef.current!.style.top = y + "px";
        glassAfterImg.current!.style.left = -x * 2 + "px";
        glassAfterImg.current!.style.top = -y * 2 + "px";
    })
    return (
        <div className='bookDetail'>
            <HeadComponent/>
            <hr/>
            <div className='book-container'>
                <div className='book-left'>
                    <div className='show-img' ref={showImg}>
                        <img src='http://img3m2.ddimg.cn/62/32/25119332-1_w_18.jpg' alt="baiye"/>
                        <div className='glass' ref={glassRef}></div>
                    </div>
                    <div className='glass-img' ref={glassImgRef}>
                        <img src='http://img3m2.ddimg.cn/62/32/25119332-1_w_18.jpg' alt="baiye" ref={glassAfterImg}/>
                    </div>
                    <div className='imgList'></div>
                </div>
                <div className='book-mid'>
                    <div className='bookTitle'>
                        <img src='http://product.dangdang.com/images/icon_ddzy.png'/>
                        <div>东野圭吾：白夜行（易烊千玺、孟非推荐，东野圭吾作品无冕之王）</div>
                    </div>
                    <div className='bookDesc'>易烊千玺、罗云熙、张子枫推荐，东野圭吾作品无冕之·王。我一直走在白夜里，从来就没有太阳，所以不怕失去。中文版发行量超600万册。</div>
                    <div className='bookInfo'>
                        <div className='bookAuthor'>作者:<a>罗伯特。待播的</a></div>
                        <div className='publicStore'>出版社：<a>天津人民出版社</a></div>
                        <div className='publicTime'>出版时间：<a>2020年07月</a></div>
                    </div>
                    <div className='bookPirce'>
                        <div className='priceType'>
                            <div>抢购价   <a>降价通知</a></div>
                            <div>电子书价</div>
                        </div>
                        <div className='specificPrice'>
                            <div className='reducePrice'>$19.00</div>
                            <div className='ePrice'>￥25.00</div>
                        </div>
                        <div className='fixPrice'>定价￥38.00</div>
                    </div>
                    <div className='promotion'>
                        <div className='promotion-title'>
                            促销
                        </div>
                        <div className='promotion-content'>
                            <div className='buyAddEbook'>
                                <span className='book-purchase'>电子书加价购</span>
                                <span><input type='radio'/>+25元换购《人生海海(敢死不是勇气，活着才需)》</span>
                            </div>
                            <div className='buyTime'>
                                <span className='book-purchase'>限时抢</span>
                                <span>时间：2022.4.26 01：00：01-2022.04.30 23：59：59</span>
                            </div>
                            <div className='trade-in'>
                                <Collapse ghost className='demo'>
                                    <Panel header={ <div className='buyAdd'>
                                        <span className='addPrice'>加价购</span>
                                        <span>购买本商品可加价换购以下任意一件商品</span>
                                        <span>收起^</span>
                                    </div>} key="1" showArrow={false}>
                                        <div className='addPrice-book'>
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
                                                <SwiperSlide className='SwiperSlide'>
                                                   <div className='slide-left'>
                                                       <div><img src='http://img3m1.ddimg.cn/58/26/29290891-1_x_4.jpg'/></div>
                                                       <div className='slide-left-cont'>
                                                           <div className='slide-left-cont-desc'>幸福（送给每个追求幸福的大人和孩子。国际安徒生奖、德国绘本大奖得主尤塔·鲍尔，提示你思考生命中重要的是什么。）</div>
                                                           <div className='slide-left-cont-price'> $12.7</div>
                                                       </div>
                                                   </div>
                                                    <div className='slide-left'>
                                                        <div><img src='http://img3m1.ddimg.cn/58/26/29290891-1_x_4.jpg'/></div>
                                                        <div className='slide-left-cont'>
                                                            <div className='slide-left-cont-desc'>幸福（送给每个追求幸福的大人和孩子。国际安徒生奖、德国绘本大奖得主尤塔·鲍尔，提示你思考生命中重要的是什么。）</div>
                                                            <div className='slide-left-cont-price'> $12.7</div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className='distribution'>
                        <div className='distribution-title'>配送至</div>
                        <div className='distribution-address'>
                            <Cascader options={options} placeholder="Please select" className='distribution-input'/>
                        </div>
                    </div>
                    <div className='book-service'>
                        <div className='service-title'>服务</div>
                        <div className='service-cont'>由“当当”发货，并提供售后服务。 受防疫措施变化影响，您的订单可能会延迟配送，请您耐心等待。</div>
                    </div>
                    <div className='book-link'>
                        <div className='link-title'>
                            关联商品
                        </div>
                        <div className='link-cont'>
                                <div className='link-cont-book'>
                                    <img src='http://img3m9.ddimg.cn/81/1/27873729-1_x_13.jpg' />
                                    <div>生命见识</div>
                                </div>
                            <div className='link-cont-book'>
                                <img src='http://img3m9.ddimg.cn/81/1/27873729-1_x_13.jpg' />
                                <div>阿三大苏打实打实</div>
                            </div>
                            <div className='link-cont-book'>
                                <img src='http://img3m9.ddimg.cn/81/1/27873729-1_x_13.jpg' />
                                <div>的风格和的风格和的</div>
                            </div>
                            <div className='link-cont-book'>
                                <img src='http://img3m9.ddimg.cn/81/1/27873729-1_x_13.jpg' />
                                <div>微软微软</div>
                            </div>
                            <div className='link-cont-book'>
                                <img src='http://img3m9.ddimg.cn/81/1/27873729-1_x_13.jpg' />
                                <div>微软驱蚊器阿斯蒂芬啊</div>
                            </div>
                            <div className='link-cont-book'>
                                <img src='http://img3m9.ddimg.cn/81/1/27873729-1_x_13.jpg' />
                                <div>生命见识</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='book-right'></div>

            </div>
        </div>
    )
}
export  default BookDetail

import { FC } from "react";
// import { Select } from 'antd';
import { createFromIconfontCN, SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';

import head_botton_left from '../../images/header/head-botton-left.gif';
import './index.scss'
// const { Option } = Select;
const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
});
export const HeadComponent: FC = () => {
    function handleChange(value: any) {
        console.log(`selected ${value}`);
      }
    return (
        <div className="head">
            <div className="head-top">
                <div className="address">送至：湖北</div>
                <div className="headNav">
                    <ul>
                        <li>欢迎光临当当，请登录成为会员</li>
                        <li>购物车</li>
                        <li>我的订单</li>
                        <li>我的云书房</li>
                        <li>我的当当</li>
                        <li>当当拼团</li>
                        <li>小说投稿</li>
                        <li>企业采购</li>
                        <li>客户服务</li>
                        <li>切换无障碍</li>
                    </ul>
                </div>
            </div>
            <div className="head-bottom">
                <div className="head-bottom-left">
                    <img src={head_botton_left} alt="err" />
                </div>
                <div className="head-bottom-mid">
                    <div className="search">
                        <input type="text" placeholder="搜索商品" />
                        <div className='select'>
                            <select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <option value="jack">Jack</option>
                                <option value="lucy">Lucy</option>
                                <option value="disabled" disabled>
                                    Disabled
                                </option>
                                <option value="Yiminghe">yiminghe</option>
                            </select>
                        </div>
                        <div className="SearchOutlined"><SearchOutlined /></div>
                    </div>
                </div>
                <div className="head-bottom-right">
                    <div className="shopCar">  <IconFont type="icon-shoppingcart" />购物车</div>
                    <div className="order">我的订单</div>
                </div>
            </div>
        </div>
    )
};

// import { Tabs, Form, Input, Button ,message} from 'antd';
// import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {message} from 'antd'
import axios from 'axios'
import './index.scss'
import {useRef} from "react";

// const { TabPane } = Tabs;
const RegisterPages = () => {
    const inputEmail=useRef<HTMLInputElement|null>(null)
    const navigate=useNavigate()
    //返回到登录页面
    const toLoginPages=()=>{
        navigate('/')
    }
    //获取验证码
    const getCode=async ()=>{
        if(inputEmail.current?.value===''){
            message.info("邮箱不能为空")
            return
        }
        let result=await axios.post('http://localhost:3000/register/requireCode')
        console.log(result)
    }
    return (
        <div className='registerTabs'>
            <div className='immedRegister' onClick={()=>toLoginPages()}>立即注册</div>
            <input type="phone" placeholder='手机号'/>
            <input type="text" placeholder='昵称'/>
            <input type="email" placeholder='邮箱' ref={inputEmail}/>
            <div className='register-sendCode'>
                <input type="text" name="" id="" placeholder='验证码' />
                <p onClick={()=>getCode()}>发送验证码</p>
            </div>
            <p className='agree'>登录即同意<strong>用户协议，隐私政策</strong></p>
            <button>同意并注册</button>
        </div>
    )
}
export default RegisterPages

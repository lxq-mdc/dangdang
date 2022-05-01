import {Fragment, useRef} from "react"
import {useNavigate} from 'react-router-dom'
import {Login} from "../../api/api";
import  axios from 'axios'
import './passWordLogin.scss'
import {ILogin} from "../../model/login";
import {message} from "antd";
const PassWordLogin = () => {
    //判断输入是否是手机号码
    const isPhone=(str:string):boolean=>{
        let reg = /^1[3|4|5|7|8][0-9]{9}/;
        return reg.test(str)
    }
    const navigate=useNavigate()
    const passwordInput=useRef<HTMLInputElement>(null)
    const identityInput=useRef<HTMLInputElement>(null)

    const passwordLogin=async ()=>{
        // console.log('identityValue',identityInput,'passwordValue',passwordInput)
        const identityValue=identityInput.current?.value
        const passwordValue=passwordInput.current?.value
        let params:Partial<ILogin>={
            phone:identityValue,
            password:passwordValue
        }
      // if(passwordValue==null||identityValue==null){
      //     message.info("信息填写不完整")
      // }else {
      //     if(identityValue!.includes("@")){
      //         params["email"]=identityValue
      //     }else if(isPhone(identityValue!)){
      //         console.log(identityValue)
      //         params["phone"]=identityValue
      //     }else {
      //         params["nickname"]=identityValue
      //     }
      // }

        // params["password"]=passwordValue
        // console.log('login',params)
        let result=await Login(params)
        console.log('result',result)
        if(result.status!==0){
            // localStorage.setItem('token',result.data.token)
            navigate('/')
            // console.log(result)
        }

    }
    return (
        <Fragment>
              <div className='authCodeForm'>
                <input type="text" placeholder='手机号/邮箱/昵称'  ref={identityInput}/>
                <input type="password" name="" id="" placeholder='密码' ref={passwordInput}/>
                <p>登录即同意<strong>用户协议，隐私政策</strong></p>
                <button onClick={()=>passwordLogin()}>登录</button>
            </div>
        </Fragment>
    )
}
export default PassWordLogin

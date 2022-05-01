
import { Fragment } from 'react';
import './authCodeLogin.scss'
const AuthCodeLogin = () => {
    return (
        <Fragment>
            <div className='authCodeForm'>
                <input type="text" placeholder='邮箱' />
                <input type="password" name="" id="" placeholder='验证码'/>
                <p>登录即同意<strong>用户协议，隐私政策</strong></p>
                <button>登录</button>
            </div>
        </Fragment>
    )
}
export default AuthCodeLogin

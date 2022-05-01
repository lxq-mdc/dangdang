import { Row, Col } from 'antd';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import LoginPages from '../../pages/login';
import RegisterPages from '../../pages/register';
import LoginPng from '../../images/login/login.png'
import './index.scss'
import { useEffect } from 'react';
const LoginComponent = () => {
    const location = useLocation()
    const routerName = () => {
        console.log('location.pathname', location.pathname)
    }
    useEffect(() => {
        routerName()
    })
    const navigate = useNavigate()
    const toRegister = () => {
        navigate('/register')
    }
    return (
        <div>
            <Row>
                <Col span={15}>
                    <img src={LoginPng} alt="" style={{ width: '100%', height: '100%' }} />
                </Col>，
                <Col span={8} className='loginCol'>
                    <div className='loginTable'>
                        <Routes>
                            <Route path='/' element={<LoginPages />} />
                            <Route path='/register' element={<RegisterPages />} />
                        </Routes>
                        {location.pathname !== '/register' ? <div className='tabBottom'>
                            <div className='registerImmed' onClick={() => toRegister()}>立即注册</div>
                            <div className='forgetPassword'>忘记密码</div>
                        </div> : null}
                    </div>

                </Col>
            </Row>
        </div>
    )
}
export default LoginComponent

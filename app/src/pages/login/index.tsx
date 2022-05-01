import { Tabs } from "antd"
import AuthCodeLogin from "./authCodeLogin"
import PassWordLogin from "./passWordLogin"
import './index.scss'
const { TabPane } = Tabs;
const LoginPages=()=>{
    return (
        <div>
            <Tabs size='large' defaultActiveKey="1" centered className='loginTabs'>
                        <TabPane tab="密码登录" key="1" style={{marginLeft:'50px'}}>
                            <PassWordLogin />
                        </TabPane>
                        <TabPane tab="验证码登录" key="2" style={{marginLeft:'50px'}}>
                            <AuthCodeLogin />
                        </TabPane>
                    </Tabs>
        </div>
    )
}
export default LoginPages

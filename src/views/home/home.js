import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Input, Row, Col, Image, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { MailOutlined, 
    AppstoreOutlined, 
    HeartOutlined, 
    SettingOutlined, 
    UserOutlined, 
    CloseOutlined 
} from '@ant-design/icons';
import logo from './logo_ter.png'

import ToolItem from '../tool_item';
import Setting from '../setting';
import Installed from '../installed';
import UserCenter from '../user';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component {

    state = {
        current: 'mail',
        menu: <ToolItem/>
    };

    handleClick = e => {
        console.log('click ', e);
        if(e.key == 0){
            this.setState({ 
                menu: <ToolItem />
            });
        }
        if(e.key == 1){
            this.setState({ 
                menu: <Installed />
            });
        }
        if(e.key == 2){
            this.setState({ 
                menu: <Setting />
            });
        }
        if(e.key == 3){
            this.setState({ 
                menu: <UserCenter />
            });
        }
    };

    render() {
    const { current } = this.state;
    return (
        <>
            {/* <div style={{background: "#f0f0f0",padding: 10}}>
                <Row>
                    <Col span={4}><Image width={120} height ={30}
                        src={logo}
                    /></Col>
                    <Col><Input placeholder="搜索工具" style={{borderRadius:50,width:300}}/></Col>
                    <Col style={{float:"right"}}><CloseOutlined /></Col>
                </Row>
            </div> */}
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{background:'#fafafa'}}>
                <Menu.Item key="0" icon={<AppstoreOutlined />}>
                    工具中心
                </Menu.Item>
                <Menu.Item key="1" icon={<HeartOutlined />}>
                    已安装
                </Menu.Item>
                <Menu.Item key="2" icon={<SettingOutlined />}>
                    设置
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    账号数据
                </Menu.Item>
                <Menu.Item key="5">
                    <Input placeholder="搜索工具" style={{borderRadius:50,width:200}}/>
                </Menu.Item>
            </Menu>
            <div style={{float:'right',marginTop:-38,marginRight:15}}>
                <Image style={{width:30,height:30 }} src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                {/* <Avatar  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" /> */}
            </div>
            <Content>
                {this.state.menu}
            </Content>
        </>
    );
    }
}

export default Home;
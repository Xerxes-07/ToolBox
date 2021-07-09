import React from 'react';
import { Layout, Menu, Empty, Card, Carousel, Drawer, Avatar, Image} from 'antd';
import { CloudDownloadOutlined , } from '@ant-design/icons';
import img1 from './1.png'
import gif1 from './1.gif'

const { Header, Content, Footer, Sider } = Layout;

const menu = [
    {0:'0_Installation'},
    {1:'1_Library'},
    {2:'2_Schematic'},
    {3:'3_Placement'},
    {4:'4_Layout'},
    {5:'5_Database'},
    {6:'6_Cleanup'},
    {7:'7_other'}
]

class ToolItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerHeight,
            height: window.innerHeight,
            visible: false
        };
    }
    
    showDrawer = () => {
        this.setState({
            visible: true
        })
    };

    onClose = () => {
        this.setState({
            visible: false
        })
    };

    render() {
        return(
            <Layout className="site-layout-background" >
                <Sider className="site-layout-background" width={150}>
                <Menu
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{background:'#fafafa',height:this.state.height * 0.85}}
                >
                    {/* {menu.map(i => <Menu.Item >{i}</Menu.Item>)} */}
                    <Menu.Item key="0">0_Installation</Menu.Item>
                    <Menu.Item key="1">1_Library</Menu.Item>
                    <Menu.Item key="2">2_Schematic</Menu.Item>
                    <Menu.Item key="3">3_Placement</Menu.Item>
                    <Menu.Item key="4">4_Layout</Menu.Item>
                    <Menu.Item key="5">5_Database</Menu.Item>
                    <Menu.Item key="6">6_Cleanup</Menu.Item>
                    <Menu.Item key="7">7_other</Menu.Item>
                </Menu>
                </Sider>
                <Content style={{margin:20,overflow:'auto', maxHeight:this.state.height * 0.78}}>
                    {/* <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> */}
                    <Carousel autoplay>
                        <div>
                            {/* <h3 style={contentStyle}>DET Release Tool V1</h3> */}
                            <Image src={img1} style={{maxHeight: 160}}/>
                        </div>
                        <div>
                            <h3 style={contentStyle}>DET Update Tool V2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>DET Release Tool V3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>DET Update Tool V4</h3>
                        </div>
                    </Carousel>

                    <Card title="1_Schematic_create">
                        <Card.Grid style={gridStyle}>
                            <Avatar src={gif1} style={avatarStyle}/>
                            <label onClick={this.showDrawer}>01_Single_pin_DUT_block_auto_tool</label>
                            <CloudDownloadOutlined style={{float:'right',paddingTop: 5}}/>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <Avatar src={gif1} style={avatarStyle}/>
                            02_Power Sch Auto Capture
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>
                            <Avatar src={gif1} style={avatarStyle}/>
                            03_Single_pin_DUT_sch_auto_tool
                        </Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>04_ST_socket_board_sch_auto_tool</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>05_Signal_Name_Prefix</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>06_Sch_Copy_Site</Card.Grid>
                    </Card>
                    <Card title="2_Schematic_update">
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>01_Swap_Channels</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>02_Rename_files</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>03_Renumber_page</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>04_Sch_refdes_swap</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>05_Sch_delete_caps</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>06_Help_Change_ColorLine_Width_v1.0</Card.Grid>
                    </Card>
                    <Card title="3_Schematic_output">
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>01_Bom_Generator</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>02_Channel_map_convert</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>03_Merge Channel Extract</Card.Grid>
                    </Card>
                    <Card title="4_PIB_PC_schematic">
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>PIB Channel Assign</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>Pogo List Extract</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>TB Flex_CH Rename MU</Card.Grid>
                    </Card>
                    <Card title="5_Schematic_check">
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>NetColorWidthAnalyzer</Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar src={gif1} style={avatarStyle}/>Sch Txt Size Check</Card.Grid>
                    </Card>
                </Content>
                <Drawer
                    title="工具详情"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={this.state.width * 0.8}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </Layout>
        )
    }
}

const gridStyle = {
    width: '50%',
    // textAlign: 'center',
    bordered: false,
    margin: 0,
    padding: 15,
    bordered: false
};

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const avatarStyle = {
    height:30, 
    width:30, 
    padding:0, 
    marginRight: 10
};

export default ToolItem;
import { Layout, Menu, Breadcrumb } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    LineChartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
    const [collapsed, setcollapsed] = useState(false);
    const onCollapse = (collapsed) => {
        console.log(collapsed);
        setcollapsed(collapsed);
    };
    return (
        // <Layout style={{ minHeight: "100vh" }}>

        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{ minHeight: "100vh" }}>
            <div className='logo' />
            <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
                <Menu.Item key='1' icon={<LineChartOutlined />}>
                    Predict
                </Menu.Item>
                <Menu.Item key='2' icon={<PieChartOutlined />}>
                    Overview
                </Menu.Item>
                {/* <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
                        <Menu.Item key='3'>Tom</Menu.Item>
                        <Menu.Item key='4'>Bill</Menu.Item>
                        <Menu.Item key='5'>Alex</Menu.Item>
                    </SubMenu> */}
            </Menu>
        </Sider>
        // {/* <Layout className='site-layout'>
        //     <Header
        //         className='site-layout-background'
        //         style={{ padding: 0 }}
        //     />
        //     <Content style={{ margin: "0 16px" }}>
        //         <Breadcrumb style={{ margin: "16px 0" }}>
        //             <Breadcrumb.Item>User</Breadcrumb.Item>
        //             <Breadcrumb.Item>Bill</Breadcrumb.Item>
        //         </Breadcrumb>
        //         <div
        //             className='site-layout-background'
        //             style={{ padding: 24, minHeight: 360 }}>
        //             Bill is a cat.
        //         </div>
        //     </Content>
        //     <Footer style={{ textAlign: "center" }}>
        //         Ant Design ©2018 Created by Ant UED
        //     </Footer>
        // </Layout>
        // </Layout>*/}
    );
};

export default SideBar;

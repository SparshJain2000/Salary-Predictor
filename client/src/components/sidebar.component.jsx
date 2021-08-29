import { Layout, Menu, Breadcrumb } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    LineChartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
    const [collapsed, setcollapsed] = useState(false);
    let location = useLocation();
    const onCollapse = (collapsed) => {
        console.log(collapsed);
        setcollapsed(collapsed);
    };
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{ minHeight: "100vh" }}>
            <div className='logo' />
            <Menu
                theme='dark'
                defaultSelectedKeys={[
                    location?.pathname === "/"
                        ? "1"
                        : location?.pathname === "/overview"
                        ? "2"
                        : "",
                ]}
                mode='inline'>
                <Menu.Item key='1' icon={<LineChartOutlined />}>
                    <NavLink to='/'>Predict</NavLink>
                </Menu.Item>
                <Menu.Item key='2' icon={<PieChartOutlined />}>
                    <NavLink to='/overview'>Overview</NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default SideBar;

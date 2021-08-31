import { Layout, Menu } from "antd";
import { PieChartOutlined, LineChartOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
const { Sider } = Layout;

const SideBar = () => {
    const [collapsed, setcollapsed] = useState(false);
    let location = useLocation();
    const onCollapse = (collapsed) => setcollapsed(collapsed);

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

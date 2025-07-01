import React, { useState } from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { SelectColor } from './components/SelectColor';
import { useNavigate, Outlet } from 'react-router-dom';
import Counter from './components/Counter';
import { useCounterStore } from './components/counter-zustand/counter.store';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', '/', <PieChartOutlined />),
    getItem('Tasks', '/task', <PieChartOutlined />),
    getItem('Tasks Z', '/task-z', <PieChartOutlined />),
    getItem('Todos', '/todo', <DesktopOutlined />),
    getItem('Posts', '/post', <DesktopOutlined />),
    getItem('Counter', '/counter', <DesktopOutlined />),
    getItem('Counter Z', '/counter-z', <DesktopOutlined />),
];

export const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const { count } = useCounterStore();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={e => navigate(e.key)} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} >
                    <SelectColor />
                    <Counter></Counter>
                    - {count}
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    {new Date().getFullYear()} {import.meta.env.VITE_APP_TITLE}
                </Footer>
            </Layout>
        </Layout>
    );
};
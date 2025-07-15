import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Spin } from 'antd';
import { type RegisterRequest } from '../../Api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registerAction, selectAuth } from './auth.slice';
import { Link, useNavigate } from 'react-router-dom';





const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const onFinish: FormProps<RegisterRequest>['onFinish'] = async (values) => {
        dispatch(registerAction(values));
    };

    const { token, loading } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token])

    return (<Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
    >
        <Form.Item<RegisterRequest>
            label="email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input type='email' />
        </Form.Item>

        <Form.Item<RegisterRequest>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>


        <Form.Item label={null}>
            <Spin spinning={loading}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Spin>
            &nbsp;
            <Link to="/auth/login">Login</Link>

        </Form.Item>
    </Form>
    )
};

export default App;
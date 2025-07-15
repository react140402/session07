import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { type LoginRequest } from '../../Api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction, selectToken } from './auth.slice';
import { Link, useNavigate } from 'react-router-dom';





const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const onFinish: FormProps<LoginRequest>['onFinish'] = async (values) => {
        dispatch(loginAction(values));
    };

    const token = useAppSelector(selectToken);
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
        initialValues={{ email: "test@test.com" }}
        onFinish={onFinish}
        autoComplete="off"
    >
        <Form.Item<LoginRequest>
            label="email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input type='email' />
        </Form.Item>

        <Form.Item<LoginRequest>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>


        <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Login
            </Button>
            &nbsp;
            <Link to="/auth/register">Create account</Link>
        </Form.Item>

    </Form>
    )
};

export default App;
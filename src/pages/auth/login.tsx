import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { type LoginRequest, Api } from '../../Api';
import { useAppDispatch } from '../../hooks';
import { loginAction } from './auth.slice';





const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const onFinish: FormProps<LoginRequest>['onFinish'] = async (values) => {
        dispatch(loginAction(values));
    };

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
        </Form.Item>
    </Form>
    )
};

export default App;
import { Button, Pagination, Table, type TableProps, Popconfirm, notification, Form, Input, type FormProps } from "antd";
import { use } from "react";
import { AppContext } from "../../AppContext";
import { AppHelmet } from "../../AppHelmet";

import type { AdvieCreateModel, AdvieModel } from "~/Api";
import { useFetchAppData } from "../../hooks/useFetchAppData";
import {
    DeleteOutlined
} from '@ant-design/icons';
import { appApi } from "~/AppApi";
import { useForm } from "antd/es/form/Form";

export default function () {
    const { color } = use(AppContext);

    const columns: TableProps<AdvieModel>['columns'] = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Tozih',
            dataIndex: 'Tozih',
            key: 'Tozih',
        },
        {
            title: 'Acction',
            dataIndex: 'id',
            key: 'id',
            render: (_, { id }) => (
                <>
                    <Popconfirm
                        title="Delete the task"
                        description="مطمئن هستید؟"
                        onConfirm={() => removeItem(id)}
                        okText="Yes"
                        cancelText="No"
                    >

                        <Button danger><DeleteOutlined /></Button>
                    </Popconfirm>
                </>
            ),
        },


    ];

    async function removeItem(id: number | undefined) {
        if (!id) return;
        await appApi.advie.deleteAdvie(id);
        notification.success({ message: "حذف با موفقیت انجام شد" })
        refresh();
    }

    const { data, loading, page, totalCount, paginationChange, refresh } = useFetchAppData<AdvieModel>("advie");

    async function onCreateAdvie(values: AdvieCreateModel) {
        await appApi.advie.createAdvie(values);
        refresh();
        form.resetFields();
    }

    const [form] = useForm<AdvieCreateModel>();
    return (
        <>
            <AppHelmet title={`ادویه`}>
                <meta name="desciption" content="Album"></meta>
            </AppHelmet>

            <div style={{ color }}>ادویه</div>
            <Button onClick={refresh}>Refresh</Button>
            <Pagination defaultCurrent={page} total={totalCount} onChange={paginationChange} />
            <br />
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onCreateAdvie}
                autoComplete="off"
                form={form}
            >
                <Form.Item<AdvieCreateModel>
                    label="Name"
                    name="Name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<AdvieCreateModel>
                    label="Tozih"
                    name="Tozih"
                    rules={[{ required: true }]}
                >
                    <Input.TextArea />
                </Form.Item>


                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Table
                loading={loading}
                dataSource={data}
                columns={columns}
                pagination={false}
            />;
        </>
    )
}

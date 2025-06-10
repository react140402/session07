import { Button, Pagination, Table, type TableProps } from "antd";
import { useFetchData } from "../../hooks/useFetchData";
import { use } from "react";
import { AppContext } from "../../AppContext";
import { AppHelmet } from "../../AppHelmet";

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}


export function TodoList() {

    const { color } = use(AppContext);

    const columns: TableProps<Todo>['columns'] = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'User Id',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Completed',
            key: 'completed',
            dataIndex: 'completed',
            render: (_, { completed }) => (
                <>
                    {completed ? "✅" : "🟩"}
                </>
            ),
        },
    ];

    const { data, loading, page, totalCount, paginationChange, refresh } = useFetchData<Todo>("todos");

    return (
        <>
            <AppHelmet title="Todo List">
                <meta name="desciption" content="Todo List"></meta>
            </AppHelmet>

            <div style={{ color }}>TodoList</div>
            <Button onClick={refresh}>Refresh</Button>
            <Pagination defaultCurrent={page} total={totalCount} onChange={paginationChange} />
            <br />
            <Table
                loading={loading}
                dataSource={data}
                columns={columns}
                pagination={false}
            />;
        </>
    )
}

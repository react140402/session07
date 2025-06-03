import { Button, Pagination, Table, type TableProps } from "antd";
import { useFetchData } from "../../hooks/useFetchData";

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

interface Props {
    color: string;
}
export function TodoList({ color }: Props) {

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

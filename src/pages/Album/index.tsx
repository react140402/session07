import { Button, Pagination, Table, type TableProps } from "antd";
import { useFetchData } from "../../hooks/useFetchData";
import { use } from "react";
import { AppContext } from "../../AppContext";
import { AppHelmet } from "../../AppHelmet";
import { Link } from "react-router-dom";

interface Album {
    id: number;
    userId: number;
    title: string;
}


export default function () {

    const { color } = use(AppContext);

    const columns: TableProps<Album>['columns'] = [
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
            title: 'Actions',
            dataIndex: 'id',
            key: 'Actions',
            render: (_, { id }) => (
                <>
                    <Link to={`/album/${id}/photos`}>Photos 📷</Link>
                </>
            ),
        },

    ];

    const { data, loading, page, totalCount, paginationChange, refresh } = useFetchData<Album>("albums");

    return (
        <>
            <AppHelmet title="Albums">
                <meta name="desciption" content="Albums"></meta>
            </AppHelmet>

            <div style={{ color }}>Albums</div>
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

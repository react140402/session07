import { Button, Pagination, Table, type TableProps } from "antd";
import { useFetchData } from "../../hooks/useFetchData";
import { use } from "react";
import { AppContext } from "../../AppContext";
import { AppHelmet } from "../../AppHelmet";
import { useParams } from "react-router-dom";

interface Album {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}


export default function () {

    const { color } = use(AppContext);
    const { id } = useParams();

    const columns: TableProps<Album>['columns'] = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'thumbnailUrl',
            dataIndex: 'thumbnailUrl',
            key: 'thumbnailUrl',
            render: (_, { thumbnailUrl }) => (
                <>
                    <img src={thumbnailUrl} alt="" />
                </>
            ),
        },

    ];

    const { data, loading, page, totalCount, paginationChange, refresh } = useFetchData<Album>("photos?albumId=" + id);

    return (
        <>
            <AppHelmet title={`Album ${id} - Photos`}>
                <meta name="desciption" content="Album"></meta>
            </AppHelmet>

            <div style={{ color }}>Album {id} Photos</div>
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

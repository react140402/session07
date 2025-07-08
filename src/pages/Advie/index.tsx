import { Button, Pagination, Table, type TableProps } from "antd";
import { use } from "react";
import { AppContext } from "../../AppContext";
import { AppHelmet } from "../../AppHelmet";
import { useParams } from "react-router-dom";
import type { AdvieModel } from "../../Api";
import { useFetchAppData } from "../../hooks/useFetchAppData";


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


    ];

    const { data, loading, page, totalCount, paginationChange, refresh } = useFetchAppData<AdvieModel>("advie");

    return (
        <>
            <AppHelmet title={`ادویه`}>
                <meta name="desciption" content="Album"></meta>
            </AppHelmet>

            <div style={{ color }}>ادویه</div>
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

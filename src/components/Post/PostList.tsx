/*
    Ajax: 
        browser (native) : fetch / xhr
        lib: axios, request, got
        lib react: swr, react query, rtk query ...

*/

import axios from 'axios';
import { useEffect, useState } from 'react';
import type { Post } from './Post';
import { Pagination, Table, type TableProps } from 'antd';
import { useFetchData } from '../../hooks/useFetchData';
import { Helmet } from 'react-helmet-async';
import { AppHelmet } from '../../AppHelmet';


//lifecycle hooks
//useEffect
//Hook: use*
// 1. react component
//      custome hook
// 2. level asli component
//react 19 -> use API

//https://jsonplaceholder.typicode.com/


export function PostList() {

    const columns: TableProps<Post>['columns'] = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'User Id',
            dataIndex: 'userId',
            key: 'userId',
            sorter: (a, b) => a.userId - b.userId,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            sorter: (a, b) => a.title.length - b.title.length,
        },
        {
            title: 'متن پست',
            key: 'body',
            dataIndex: 'body',
            render: (_, { body }) => (
                <>
                    {body.substring(1, 100)}
                </>
            ),
        },
    ];

    // const [posts, setPosts] = useState<Post[]>([])
    // const [page, setPage] = useState(1);
    // const [perPage, setPerPage] = useState(10)
    // const [loading, setLoading] = useState(false);
    // const [totalCount, setTotalCount] = useState(0)

    // useEffect(() => {
    //     loadData();
    // }, [page, perPage]);

    // const loadData = async () => {
    //     setLoading(true);
    //     setPosts([]);
    //     const resp = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)

    //     setTotalCount(+resp.headers["x-total-count"]);
    //     setPosts(resp.data);
    //     setLoading(false);
    // }

    const { data, loading, page, totalCount, paginationChange } = useFetchData<Post>("posts");

    return (
        <>
            <AppHelmet title="Post List"></AppHelmet>
            <div>PostList</div>
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

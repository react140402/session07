import { useEffect, useState } from "react";
import type { Post } from "../components/Post/Post";
import axios from "axios";


export function useFetchData() {
    const [data, setData] = useState<Post[]>([])
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10)
    const [loading, setLoading] = useState(false);
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        loadData();
    }, [page, pageSize]);

    const loadData = async () => {
        setLoading(true);
        setData([]);
        const resp = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`)

        setTotalCount(+resp.headers["x-total-count"]);
        setData(resp.data);
        setLoading(false);
    }


    return {
        //data: data
        data,
        page,
        setPage,
        setPageSize,
        loading,
        totalCount
    }
}
import { useEffect, useState } from "react";
import axios from "axios";

//generics
export function useFetchData<T>(endpoint: string) {
    const [data, setData] = useState<T[]>([])
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
        const resp = await axios.get<T[]>(`https://jsonplaceholder.typicode.com/${endpoint}${endpoint.includes('?') ? '&' : '?'}_page=${page}&_limit=${pageSize}`)

        setTotalCount(+resp.headers["x-total-count"]);
        setData(resp.data);
        setLoading(false);
    }

    function paginationChange(page: number, pageSize: number) {
        setPage(page);
        setPageSize(pageSize)
    }


    function refresh() {
        setPage(1);
        loadData(); //TODO: 
    }


    return {
        //data: data
        data,
        page,
        loading,
        totalCount,
        paginationChange,
        refresh
    }
}
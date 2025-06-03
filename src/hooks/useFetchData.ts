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
        const resp = await axios.get<T[]>(`https://jsonplaceholder.typicode.com/${endpoint}?_page=${page}&_limit=${pageSize}`)

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
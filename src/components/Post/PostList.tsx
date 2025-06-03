/*
    Ajax: 
        browser (native) : fetch / xhr
        lib: axios, request, got
        lib react: swr, react query, rtk query ...

*/

import axios from 'axios';
import { useEffect, useState, use } from 'react';
import type { Post } from './Post';


//lifecycle hooks
//useEffect
//Hook: use*
// 1. react component
//      custome hook
// 2. level asli component
//react 19 -> use API

//https://jsonplaceholder.typicode.com/
export function PostList() {

    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        //JS/TS Promise<AxiosResponse<any, any>>
        //C#    Task<AxiosResponse<any, any>>
        //async/await 
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(resp =>
        //     console.log(resp)
        // )

        const id = setInterval(() => {
            loadData();
        }, 30000);

        loadData();
        console.log("Salam")

        return () => {
            //cleanup
            clearInterval(id);
            console.log('Khoda hafez')
        }

    }, [page]);

    const loadData = async () => {
        setLoading(true);
        setPosts([]);
        const resp = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}}&_per_page=10`)

        setTotalCount(+resp.headers["x-total-count"]);
        setPosts(resp.data);
        setLoading(false);

    }
    function generatePaging() {
        let pages = [];
        for (let i = 1; i <= totalCount / 10; i++) {
            pages.push(<button onClick={() => setPage(i)}>Page {i}</button>)
        }
        return pages;
    }

    return (
        <>
            <div>PostList</div>
            {/* {generatePaging()} */}
            {new Array(totalCount / 10).fill(0).map((_, index) =>
                <button onClick={() => setPage(index + 1)}>Page {index + 1}</button>
            )}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && <tr>
                        <td colSpan={10}>Loading ...</td>
                    </tr>}
                    {posts.map((post) => <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

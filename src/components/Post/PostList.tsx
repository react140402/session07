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

        console.log(resp.headers["x-total-count"])
        setPosts(resp.data);
        setLoading(false);

    }

    return (
        <>
            <div>PostList</div>
            <button onClick={() => setPage(1)}>Page 1</button>
            <button onClick={() => setPage(2)}>Page 2</button>
            <button onClick={() => setPage(3)}>Page 3</button>
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
                    {posts.map(post => <tr key={post.id}>
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

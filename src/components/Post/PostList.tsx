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

export function PostList() {
    const [showHeader, setShowHeader] = useState(true);
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        //JS/TS Promise<AxiosResponse<any, any>>
        //C#    Task<AxiosResponse<any, any>>
        //async/await 
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(resp =>
        //     console.log(resp)
        // )

        loadData();

    }, []);

    const loadData = async () => {
        const resp = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10')
        setPosts(resp.data);

    }

    return (
        <>
            {showHeader && <div>PostList</div>}
            <button onClick={() => setShowHeader(!showHeader)}>toggle</button>
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

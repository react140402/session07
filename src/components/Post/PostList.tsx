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
        const resp = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts')
        console.log(resp)
    }

    return (
        <>
            {showHeader && <div>PostList</div>}
            <button onClick={() => setShowHeader(!showHeader)}>toggle</button>
        </>
    )
}

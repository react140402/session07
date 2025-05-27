/*
    Ajax: 
        browser (native) : fetch / xhr
        lib: axios, request, got
        lib react: swr, react query, rtk query ...

*/

import axios from 'axios';
import { useEffect, useState, use } from 'react';

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
        axios.get('https://jsonplaceholder.typicode.com/posts')
    }, []);


    return (
        <>
            {showHeader && <div>PostList</div>}
            <button onClick={() => setShowHeader(!showHeader)}>toggle</button>
        </>
    )
}

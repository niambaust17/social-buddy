import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () =>
{
    const [posts, setPosts] = useState([]);
    useEffect(() =>
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <>
            <h1>Total Posts: {posts.length}</h1>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </>
    );
};

export default Home;
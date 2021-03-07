import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
const Post = (props) =>
{
    const { post } = props;
    const { id, title, body } = post;

    return (
        <div className='single-post'>
            <h2>Post-{id}</h2>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <button><Link to={`posts/${ id }/comments`}>Show More</Link></button>
        </div>
    );
};

export default Post;
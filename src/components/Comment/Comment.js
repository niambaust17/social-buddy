import React from 'react';
import './Comment.css';
const Comment = (props) =>
{
    const { comment } = props;
    const { name, email, body } = comment;
    return (
        <div className='single-comment'>
            <h2>Commented By: {name}</h2>
            <p>{body}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Comment;
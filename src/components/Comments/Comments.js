import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const Comments = () =>
{
    let { id } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() =>
    {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ id }/comments`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])
    return (
        <div>
            <h1>Total Comments: {comments.length}</h1>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;
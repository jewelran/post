import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import data from '../Data/data.json'

const PostDetail = () => {
    const { userId } = useParams();
    const postDetail = data.find(pd => pd.key === userId);
    return (
        <div>
            <Post post={postDetail}></Post>

        </div>
    );
};

export default PostDetail;
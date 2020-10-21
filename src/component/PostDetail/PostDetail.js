import React from 'react';

const PostDetail = (props) => {
    const {picture} = props.photo
    return (
        <div>
        <img src={picture.large} alt=""/>
           
        </div>
    );
};

export default PostDetail;
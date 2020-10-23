import React from 'react';

const PostDetail = (props) => {
    const {picture} =props.photos
    console.log(props)
    return (
        <div>
           <img src={picture.large}/>
        </div>
    );
};

export default PostDetail;
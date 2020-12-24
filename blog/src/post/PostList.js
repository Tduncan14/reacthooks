import React from 'react';
import Posts from './Post';


export default function PostList ({
    posts =[]
}) {

    return (
        <div>
            {posts.map((p,i) =>(<><Posts {...p} key={ 'post -' + i}/>
             <hr /> </>))}
        </div>
    )



}
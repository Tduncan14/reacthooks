import React,{useContext} from 'react';
import {StateContext} from '../context';
import Posts from './Post';


export default function PostList ({
  
}) {
     const {state,dispatch} = useContext(StateContext)
     const {posts} = state

    return (
        <div>
            {posts.map((p,i) =>(<><Posts {...p} key={ 'post -' + i}/>
             <hr /> </>))}
        </div>
    )



}
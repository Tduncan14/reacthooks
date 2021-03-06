import React,{useContext} from 'react';
import {ThemeContext} from '../context';

export default function Post ({title,content,author}){

    
     const {secondaryColor} = useContext(ThemeContext)


    return(
        <ThemeContext.Provider value ={{primaryColor:'deepbskyblue',secondaryColor:'coral'}}>
       <div>
           <h3 style={{color:secondaryColor}}>{title} </h3>
           <div>{content}</div>
           <br />
           <i>Written by <b>{author}</b></i>
       </div>
       </ThemeContext.Provider>
       

    )
}
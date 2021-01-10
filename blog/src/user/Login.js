import React,{useState,useContext} from 'react';
import {StateContext} from '../context';


export default function Login (){


    const {dispatch} = useContext(StateContext)

    const [username,setUsername] = useState('');
 

    function handleUsername(evt){

         setUsername(evt.target.value)
    }

 return(
     <form onSubmit={e =>{e.preventDefault(); dispatch({type:'LOGIN',username}) }}>
         <label  htmlFor="login-username">Username</label>
         <input onChange={handleUsername} type="text" name="login-username" id="login-username"/>
         <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" />
         <input type="submit" disabled={username.length === 0} value="login"/>
     </form>
 )




}
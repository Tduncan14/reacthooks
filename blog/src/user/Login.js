import React,{useState} from 'react';



export default function Login ({dispatch}){


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
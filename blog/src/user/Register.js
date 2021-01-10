import React ,{useState,useContext} from 'react';
import {StateContext} from '../context'

export default function Register ({}){


    const {dispatch} = useContext(StateContext)

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [passwordRepeat,setPassWordRepeat]=useState('')

    function handleUsername (evt){

          setUsername(evt.target.value)
    }

    function handlePassword(evt){
       
        setPassword(evt.target.value);

    }

    function handlePasswordRepeat(evt){
        setPassWordRepeat(evt.target.value)
    }


    return(

        <form onSubmit={e => { e.preventDefault(); dispatch({type:'REGISTER',username})}}>
           
           <label htmlFor ="register-username">Username:</label>
           <input type="text" onChange={handleUsername} name="register-username" id="register-username" value={username}/>
           <label htmlFor ="register-password">Password:</label>
           <input type="password" name="register-password" id="register-password" value={password} onChange={handlePassword}/>

           <label htmlFor="register-password-repeat">Repeat password </label>
           <input type="password" name="register-password-repeat" id="register-password-repeat" value={passwordRepeat} onChange={handlePasswordRepeat}/>

           <input type="submit" disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat} value="Register"/>
        </form>


    )










}
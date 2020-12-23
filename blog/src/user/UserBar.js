import React from 'react';


import Login from './Login';
import Logout from './Logout';
import Register from './Register';



export default function UseBar(){

    const user = 'Treek Lee';


    if(user){
        return <Logout user={user} />
    }
    else{

        return(
            <>
            <Login />
            <Register />


            </>
        )
    }








}
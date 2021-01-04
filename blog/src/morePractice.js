import React, {useEffect} from 'react';


function App ({title}){

    useEffect(() =>{

        document.title = title;
    },[title])


    return(
        <div> Test App</div>
    )


}
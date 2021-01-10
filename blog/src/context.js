import React ,{useEffect} from 'react';


export const ThemeContext = React.createContext({

    primaryColor:'deepskyblue',
    secondaryColor:'coral'
})


export const StateContext = React.createContext({

    state:{},
    dispatch:()=>{}
})
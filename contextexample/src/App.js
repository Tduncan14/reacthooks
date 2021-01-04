import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React from 'react';

// const defaultValue = {primaryColor:'deepskyblue'};

// React.createContext(defaultValue)

export const ThemeContext = React.createContext({primaryColor:'deepskyblue'});


const App = () => {
  return (
    <ThemeContext.Provider value={{primaryColor:'coral'}} >
    <Header text={'Hello World'} />
    <ThemeContext.Provider value={{primaryColor:'deepskyblue'}}>
    <Header text={'This is a text'} />
    </ThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

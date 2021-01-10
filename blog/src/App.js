import React, {useReducer,useEffect,useState} from 'react';
import Login from './user/Login';
import Logout from './user/Logout';
import Register from './user/Register';
import UserBar from './user/UserBar';
import Post from './post/Post';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList'; 
import appReducer from './Reducer';
import Header from './Header';
import {ThemeContext} from './context';
import ChangeTheme from './ChangeTheme';

const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }]
// ]


// function userReducer(state,action){


//   switch(action.type){

//     case 'LOGIN':
//     case 'REGISTER':
//       return action.username
//     case 'LOGOUT':
//        return ''
//     default:
//       throw new Error()



//   }

// }


// function postReducer(state,action){

//   switch(action.type){

//     case 'CREATE_POST':
//        const newPost =  {title:action.title,   content:action.content,  author:action.author}
//        return[newPost, ...state];


//       default: throw new Error()



//   }


// }


function App() {


  const[theme,setTheme] = useState({

     primaryColor:'deepskyblue',
     secondaryColor:'coral'

  })


  // componentDidMount(){


  //   const{title} = this.props
  //   document.title = title
  // }


  // componentDidUpdate(prevProps){

  //   const{title} = this.prevProps
    
  //   if(title !== prevProps.title){

  //     document.title = title
  //   }
  // }

  // const [user,dispatchUser] = useReducer(userReducer,'')

  
  // const[posts,dispatchPosts] = useReducer(postReducer,defaultPosts);


  // const [state,dispatch] = useReducer(reducer,initialState)

  // const initialState = {all:true};
  // dispatch({type:'CHANGE_FILTER', fromDate:'2019-04-30'})


  const[state,dispatch] = useReducer(appReducer,{user:'',posts:defaultPosts})


  const {user,posts} = state;

  useEffect(() => {

    if(user){
      document.title = `${user} - React Hooks Blog`
    }
    else{
      document.title = 'React Hooks Blog'
    }


  },[user])


  return (
  <ThemeContext.Provider value={{theme}}>
    <div style={{padding:8}}>
      {/* <Login />
      <Logout user="Treek Lee" />
      <Register /> */}


      <Header text={"React Blogs"}/>

      <ChangeTheme theme={theme} setTheme={setTheme}/>

      <UserBar user={user} dispatch={dispatch}/>
       {/* <CreatePost user="treek" /> */}
       <br />
        { user && <CreatePost user={user} posts={posts}  dispatch={dispatch} />}
        <br />
        <hr />
        <PostList posts={posts} />
    </div>
   </ThemeContext.Provider>
  );
}

export default App;

import React, {useReducer,useState} from 'react';
import Login from './user/Login';
import Logout from './user/Logout';
import Register from './user/Register';
import UserBar from './user/UserBar';
import Post from './post/Post';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';


const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]


function userReducer(state,action){


  switch(action.type){

    case 'LOGIN':
    case 'REGISTER':
      return action.username
    case 'LOGOUT':
       return ''
    default:
      throw new Error()



  }

}


function App() {

  const [user,dispatchUser] = useReducer(userReducer,'')

  
  const[posts,setPosts] = useState(defaultPosts);


  // const [state,dispatch] = useReducer(reducer,initialState)

  // const initialState = {all:true};
  // dispatch({type:'CHANGE_FILTER', fromDate:'2019-04-30'})


  return (
    <div style={{padding:8}}>
      {/* <Login />
      <Logout user="Treek Lee" />
      <Register /> */}

      <UserBar user={user} dispatch={dispatchUser}/>
       {/* <CreatePost user="treek" /> */}
       <br />
        { user && <CreatePost user={user} posts={posts}  setPosts={setPosts} />}
        <br />
        <hr />
        <PostList posts={posts} />
    </div>
  );
}

export default App;

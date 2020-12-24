import React, {useState} from 'react';
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



function App() {

  const [user,setUser] = useState('')
  
  const[posts,setPosts] = useState(defaultPosts);




  return (
    <div style={{padding:8}}>
      {/* <Login />
      <Logout user="Treek Lee" />
      <Register /> */}

      <UserBar user={user} setUser={setUser}/>
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

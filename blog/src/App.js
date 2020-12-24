
import Login from './user/Login';
import Logout from './user/Logout';
import Register from './user/Register';
import UserBar from './user/UserBar';
import Post from './post/Post';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';


const posts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

const user = ["Treek"]

function App() {
  return (
    <div style={{padding:8}}>
      {/* <Login />
      <Logout user="Treek Lee" />
      <Register /> */}

      <UserBar/>
       {/* <CreatePost user="treek" /> */}
       <br />
        <CreatePost user={user} />
        <br />
        <hr />
        <PostList posts={posts} />
    </div>
  );
}

export default App;

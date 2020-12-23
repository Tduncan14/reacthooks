
import Login from './user/Login';
import Logout from './user/Logout';
import Register from './user/Register';
import UserBar from './user/UserBar';
import Post from './post/Post';


function App() {
  return (
    <>
      {/* <Login />
      <Logout user="Treek Lee" />
      <Register /> */}

      <UserBar/>
       <Post title="React Hooks" content="The greatest thing since bread" author="Treek Lee />
    </>
  );
}

export default App;

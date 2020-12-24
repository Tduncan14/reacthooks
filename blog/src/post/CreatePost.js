import React ,{useState} from 'react';


export default function CreatePost ({user,posts,setPosts}) {


    const [ title,setTitle] = useState('');
    const [content,setContent] = useState('');



    function handleTitle(evt){
      setTitle(evt.target.value);
    }    

    function handleContent(evt){
      setContent(evt.target.value)
    }

    function handleCreate(){

      const newPost = {title,content,author:user};


         setPosts([newPost, ...posts])

         setContent('');
         setTitle('');

    }

  return (

    <form onSubmit={e => {e.preventDefault(); handleCreate()}}>

        <div>Author: <b>{user}</b></div>
        <div>
            <label htmlFor="create-title">Title :</label> 
            <input value={title} type="text" name="create-title" id="create-title" onChange={handleTitle}/>
        </div>

       <textarea  value={content} onChange={handleContent}/>
       <input type="submit" value="create"/>



    </form>




  )

}
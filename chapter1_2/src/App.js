import React from 'react';
import ReactDOM from 'react-dom';



let values = []
let currentHook = 0;


function useState(initialState){


  if(typeof values[currentHook] === 'undefined') values[currentHook]= initialState;



  let hookIndex = currentHook
  function setState(nextValue){


    values[hookIndex] = nextValue
    ReactDOM.render(<MyName /> , document.getElementById('root'));

  }

   return [values[currentHook++],setState]
}


function MyName () {


  currentHook = 0;

  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');




      function handleChange(evt){

         
         setName(evt.target.value);
    }

      function handleLastNameChange(evt){

        setLastName(evt.target.value);
      }


    return ( 

        <div>
          <h1> My name is : {name}</h1>
          <h1>My Lastname is :{lastName}</h1>

          <input type="text" onChange={handleChange} value={name} />

         <input type="text" value={lastName} onChange={handleLastNameChange}/>i



        </div>


    )




}

export default MyName;
// import React,{Component} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';




   return [value,setState]











class Myname extends Component{

  constructor(props){
    super(props)


    this.state = {
      name:''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt){

    this.setState({name: evt.target.value})
  }


  render(){
      const {name} = this.state


        return(
          <div>

            <h1> My name is: {name}</h1>

            <input type ="text" value={name} onChange={this.handleChange} />
          </div>
        )



  
  
  }
}


export default Myname;
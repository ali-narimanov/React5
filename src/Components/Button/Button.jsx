import React, { Component, useEffect } from 'react'
import './Button.css'
export default class Button extends Component {
  state = {
    
    pressed: false
    
  }
oneKeypress = () =>{
  this.setState({pressed:true})
}

componentDidMount(){
  window.addEventListener("keypress", this.oneKeypress);
}
  render() {

   const {pressed} = this.state;
   let className = 'btn1';
   if(pressed){
    className = "btn2"
   };
   
   

   
    return (
     <>
     <div><button className={className}></button></div>
     
     
     
     
     </>
    )
  }
}

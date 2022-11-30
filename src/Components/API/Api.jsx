import React, { Component } from 'react'
import './Api.css'
export default class Api extends Component {

    getData = () => {
        fetch("https://acb-api.algoritmika.org/api/transaction")
        .then(res => res.json())
        .then(data => { 
          this.setState({ data: data }) 
          console.log(data[0].from)
          console.log(data[0].to)
          console.log(data[0].amount)
        });

     
        
      };
     
    
 componentDidMount(){
        this.getData();
      }

  render() {
      
    return (
      <>


     <p >
     
    

     </p>


      
      </>
    )
  }
}

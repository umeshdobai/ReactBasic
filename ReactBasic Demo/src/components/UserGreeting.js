import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isloggedIn: true
        }
    }
    
    render() {

       //Short Circuit Operator............. 
       return  this.state.isloggedIn && <div>Welcome Umesh</div>



        //Ternary operator..........
        // return (
        //     this.state.isloggedIn ?
        //     <div>Welcome Umesh</div>:
        //     <div>Welcome Guest</div>
        // )



        //Using Element variable:
        // let message
        // if(this.state.isloggedIn){
        //     message=<div>Wlcome Umesh</div>
        // }
        // else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>




        //if else block................
        // if(this.state.isloggedIn){
        //     return (
        //         <div>Welcome Umesh</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }



        
        // return (
        //     <div>
        //         <div>Welcome Umesh</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting

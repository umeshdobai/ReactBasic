import React, { Component } from 'react'

//props using class component....
class Message extends Component{

    constructor(){
        super()
        this.state={
            Message: 'Welcome Visitor'   
        }
    }

    //setState() : this is a method to alter the state of a class component
    changeMessage(){
        this.setState({
            Message:'Thank you for subscribing'
        })
    }

    render(){
        
        return (
            <div>
            <h1>
               {this.state.Message}
            </h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message;
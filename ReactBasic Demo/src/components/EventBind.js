import React, { Component } from 'react'


//Event handling methods in js............................
export class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        //3.We can bind also in the constructor(This approach will accepted widely)
        this.clickhandler=this.clickhandler.bind(this)
    }
    
    clickhandler(){
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }


    //4.handler..................... 
    // clickhandler=()=>{
    //     this.setState({
    //         message: "Goodbye"
    //     })
    // }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/*1.using bining keyword*/}
                {/*<button onClick={this.clickhandler.bind(this)}>click</button>*/}

                {/*2.using arrow function*/}
                {/*<button onClick={()=>this.clickhandler()}>click</button>*/}
                <button onClick={this.clickhandler}>click</button>
            </div>
        )
    }
}

export default EventBind

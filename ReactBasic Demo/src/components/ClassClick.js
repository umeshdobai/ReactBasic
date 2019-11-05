import React, { Component } from 'react'

export class ClassClick extends Component {
    

    clickhandler(){
        console.log("Clicked me");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick

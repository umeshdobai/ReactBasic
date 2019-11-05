import React, { Component } from 'react'

export class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.greethandler('child')}>Greet parent</button>
            </div>
        )
    }
}

export default ChildComponent

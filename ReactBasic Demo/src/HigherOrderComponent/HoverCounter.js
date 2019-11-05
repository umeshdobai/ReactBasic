import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // incrementCount = () =>{
    //     this.setState(prevState => {
    //         return { count: prevState.count+1}
    //     })
    // }
    render() {
        // console.log(this.state)//this will store the current state property value 
        // const {count}=this.state

        const {count,incrementCount}=this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>
                    Hovered {count} times</h2>
            </div>
        )
    }
}

export default WithCounter(HoverCounter , 10) //This "10" will take the parameter which has already mentioned in the WirhCounter component(HOC)

import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // incrementCount = () =>{
    //     this.setState(prevState => {
    //         console.log(prevState) //prevState is the parameter passed in setState method to know the previos state value 
    //         return { count: prevState.count+1}
    //     })
    // }
    
    render() {
        // const { count }=this.state

        const { count ,incrementCount} =this.props
        return (
            <div>
                <button onClick={incrementCount}>
                    {this.props.name}Cliked {count} times</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter , 5) //This "5" will take the parameter which has already mentioned in the WirhCounter component(HOC)

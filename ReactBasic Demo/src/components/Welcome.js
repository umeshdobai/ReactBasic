import React, { Component } from 'react'

//props using class component....
class Welcome extends Component{
    render(){
        const {name,heroName}=this.props
        //const {state1,state2}=this.state

        return (
            <h1>
                welcome {name} a.ka {heroName}
            </h1>
        )
    }
}
export default Welcome;
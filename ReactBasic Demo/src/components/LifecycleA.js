import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Umesh'
        }
        console.log('LifecycleA constructor') 
    }
    static getDerivedStateFromProps(props, state){
        console.log(" LifecycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("lifecycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("lifecycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }
    changeState = () => {
        this.setState({
            name: 'Avtar'
        })
    }
    render() {
        console.log("lifecycleA render")
        return (
            <div>
                <div>lifecycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA

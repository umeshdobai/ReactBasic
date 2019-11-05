import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Umesh'
        }
        console.log('LifecycleB constructor') 
    }
    static getDerivedStateFromProps(props, state){
        console.log(" LifecycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("lifecycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("lifecycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
    }

    render() {
        console.log("lifecycleB render")
        return (

            <div>lifecycle B</div>
        )
    }
}

export default LifecycleB

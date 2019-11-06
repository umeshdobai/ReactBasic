import React, { Component  } from 'react'
import PureComp from './PureComponent'
import RegComp from './RegularComponent'
import MemoComponent from './MemoComponent'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: "Umesh"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "umesh"
            })
        },2000)//Every 2 sec setState() method will call 
    }
    
    render() {
        console.log("=================Parent Component=========================")
        return (
            <div>
                Parent Component
                {/* <MemoComponent name={this.state.name}/> */}
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp

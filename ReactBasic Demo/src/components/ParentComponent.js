import React, { Component } from 'react'
import ChildComponennt from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentname: "parent"
        }
        this.greetparent=this.greetparent.bind(this)
    }

    greetparent(childName){
        alert(`Hello ${this.state.parentname} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponennt greethandler={this.greetparent}/>
            </div>
        )
    }
}

export default ParentComponent

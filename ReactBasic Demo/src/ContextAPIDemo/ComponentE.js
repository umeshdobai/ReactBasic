import React, { Component } from 'react'
import ComponentF from './ComponentF'
import userContext from './UserContext'

class ComponentE extends Component {
    render() {
        return (
            <div>
                ComponentE context {this.context}
                <ComponentF />
            </div>
        )
    }
}

ComponentE.contextType = userContext

export default ComponentE

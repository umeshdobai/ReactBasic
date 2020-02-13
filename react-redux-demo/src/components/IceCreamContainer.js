import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Icecreams - {props.numOfIceCream}</h2>
            <button onClick= {props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

//when we want to access redux state in the component, we define mapStateToProps function
//It gets redux state as a parameter to retrieve the appropriate property
const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

//This method gets dispatch method as a parameter and allows us to map action creators to props in our component
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

//connect function connects a react component to redux store (In our case it connects IceCreamContainer to redux store)
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)


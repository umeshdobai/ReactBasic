import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick= {props.buyCake}>Buy Cake</button>
        </div>
    )
}

//when we want to access redux state in the component, we define mapStateToProps function
//It gets redux state as a parameter to retrieve the appropriate property
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

//This method gets dispatch method as a parameter and allows us to map action creators to props in our component
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//connect function connects a react component to redux store (In our case it connects CakeContainer to redux store)
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)


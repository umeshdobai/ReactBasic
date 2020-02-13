import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {

    //useSelector is a hook react-redux library provides which acts as a close equivalent to the mapStateToProps function
    //Thatmeans to get holds of any state of that is maintained in the redux store
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()//useDispatch hook is used to dispatch an action with react-redux
    return (
        <div>
            <h2>Numbe of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer

const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'

//Action..........
//Here ACTION is a type property
function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIcecreams(){
    return{
        type: BUY_ICECREAMS,
        info: 'Second redux action'
    }
}

//Reducers.........
//It contains how the state transitions happened
//Specify how app's state changes in response to actions sent to the store
//Function that accepts state and action as arguments, and returns the next state of the application
//{previousState ,action} => newState

const initialCakeState = {
    numOfCakes: 10
}
const initialIcecreamState = {
    numOfIceCreams: 20
}



const cakeReducer = (state = initialCakeState , action) => {
    switch(action.type){
        case BUY_CAKE: 
            return {
                ...state,//Here we are copying the state object
                numOfCakes: state.numOfCakes - 1
            }
        default: 
            return state
    }
}
const icecreamReducer = (state = initialIcecreamState , action) => {
    switch(action.type){
        case BUY_ICECREAMS: 
            return {
                ...state,//Here we are copying the state object
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default: 
            return state
    }
}

//Store............
//One store the entire application
//Responsibilities:
//1.Holds application state
//2.Allows access to the state via getState()
//3.Allows state to be updated via dispatch(action)
//4.Registers listeners via subscribe(listener)
//5.Handles unregistering of listeners via the function returned by subscribe(listener)

//Dynamically create reducerfunction
const rootReducer = combineReducers({
    cake: cakeReducer,
    IceCream: icecreamReducer
})

const store = createStore(rootReducer , applyMiddleWare(logger))//1.

console.log("Initial state",store.getState())//2.

const unSubscribe = store.subscribe(() => {})//4.

store.dispatch(buyCake())//3.
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecreams())
store.dispatch(buyIcecreams())

unSubscribe()//5.
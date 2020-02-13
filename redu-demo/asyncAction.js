const redux = require('redux')
const axios = require('axios')
const thunkMiddleWare = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleWare = redux.applyMiddleware

//State
const initialState = {
    loading: false,
    users: [],
    error: ''
}

//Actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = () => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchusersFailure = () => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//Reducers
const reducer = (state = initialState , action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS: 
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE: 
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

//ASYNC action Creators
//Install axios(Requests to an API end point) , redux-thunk(define async action creators / Middleware)
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            //response.data is the array of users
            console.log(response.data)
            const users = response.data.map( (user) => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            //error.message is the errr description
            dispatch(fetchusersFailure(error.message))
        })
    }
}

const store = createStore(reducer , applyMiddleWare(thunkMiddleWare))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())
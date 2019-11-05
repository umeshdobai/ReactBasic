import React from 'react'

const userContext = React.createContext("Codevolution") //"codevolution" is the default parameter passed to the above if it is not mentioned in the above components

const UserProvider = userContext.Provider
const UserConsumer = userContext.Consumer

export { UserProvider,UserConsumer }
export default userContext
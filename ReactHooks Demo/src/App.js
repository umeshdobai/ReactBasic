import React,{useReducer} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import Hookcounter2 from './useState-and-prevState/Hookcounter2';
import HookCounter3 from './useState-and-prevState/HookCounter3';
import HookCounter4 from './useState-and-prevState/HookCounter4';
import ClassCounterone from './useEffectDemo/ClassCounterone';
import HookCounterOne from './useEffectDemo/HookCounterOne';
import ClassMouse from './useEffectDemo/ClassMouse';
import HookMouse from './useEffectDemo/HookMouse';
import MouseContainer from './useEffectDemo/MouseContainer';
import IntervalClassCounter from './useEffectDemo/IntervalClassCounter';
import IntervalHookCounter from './useEffectDemo/IntervalHookCounter';
import DataFetching from './fetchDataUsingEffectHook/DataFetching';
import ComponentC from './contextHookDemo/ComponentC';
import CounterOne from './useReducerDemo/CounterOne';
import Countertwo from './useReducerDemo/Countertwo';
import CounterThree from './useReducerDemo/CounterThree';
import ComponentA from './useReducerAnduseContext/ComponentA';
import ComponentB from './useReducerAnduseContext/ComponentB';
import DatafetchingOne from './fetchDataUsinguseState/DatafetchingOne';
import DataFetchingTwo from './fetchDataUsinguseState/DataFetchingTwo';
import ParentComponent from './callback/ParentComponent';
// import ComponentC from './useReducerAnduseContext/ComponentC';



export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0 // This is a state
// const reducer = (state, action) => {
//     switch(action){
//         case "increment":
//             return state + 1
//         case "decrement":
//             return state - 1
//         case "reset":
//             return initialState
//         default:
//             return state
//     }
// }

function App() {

  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <ParentComponent />
      {/* <DataFetchingTwo /> */}
      {/* <DatafetchingOne /> */}
      {/* <CountContext.Provider value={{countState: count , countDispatch: dispatch}}>
        Count- {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
      </CountContext.Provider> */}
      {/* <CounterThree /> */}
      {/* <Countertwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={"Umesh"}>
        <ChannelContext.Provider value={"Educaionovolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter />
      <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounterone /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounter3 /> */}
      {/* <Hookcounter2 /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;

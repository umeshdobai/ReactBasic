import React from 'react'

// function Greet(){
//     return <h1>Hello Umesh</h1>
//}



//Props using function component.................
// const Greet =  props => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }



//Another way to use props..............
const Greet =  ({name,heroName,children}) => {
    
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    )
}

export default Greet;
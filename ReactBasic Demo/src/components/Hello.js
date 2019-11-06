import React from 'react';

const Hello = () =>{

    //This is JSX syntax...................
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Umesh</h1>
    //     </div>
    // )


    //above comment code in react................
    return React.createElement(
        'div', 
        {id:'hello',className:'dummyclass'}, 
        React.createElement('h1',null,'Hello Umesh')
        )
}

export default Hello;
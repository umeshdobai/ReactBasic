import React from 'react';

const Hello = () =>{
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Umesh</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id:'helo',className:'dummyclass'}, 
        React.createElement('h1',null,'Hello Umesh')
        )
}

export default Hello;
import React, { Component } from 'react'


class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef() //this method will access the ref
        this.cbRef=null
        this.setCbRef = element =>
        {
            
            this.cbRef=element
            console.log(this.cbRef); //<input type="text">

        }
    }

    componentDidMount(){
        if(this.cbRef)
        {
            
            this.cbRef.focus();
        }
        // this.inputRef.current.focus()  //Focusing the input field
        // console.log(this.inputRef)  //{current: input}

    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)  //The entered value in the input field

    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

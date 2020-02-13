import React, { Component } from 'react'
import './DynamicForm.css'

class DynamicForm extends Component {
    
    constructor(props) {
        super(props)
        var temp;
        var res;
        var resArray = [];
    
        this.state = {
            status: false,
            res: res,
            temp: temp,
            resArray: resArray,
            //These below variables for dropped components redering
            i: 0, 
            j: 0,
            k: 0,
            l: 0,
            m: 0
        }
    }    
    
    onChange = (e,key) =>{
        this.setState({
            [key]: e.target.value
        })
        
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    //This is maintained for dragging components
    drag = (event) => {
        event.dataTransfer.setData("textId",event.target.id)    
        var style = window.getComputedStyle(event.target, null);//Here We will get the property for the whole component
        var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
        event.dataTransfer.setData("text",str);

        //These opearations for the dropped components redering
        if(event.target.id === "name")
            this.setState({i: this.state.i + 1})
        if(event.target.id === "age")
            this.setState({j: this.state.j + 1})
        if(event.target.id === "rating")
            this.setState({k: this.state.k + 1})
        if(event.target.id === "qualification")
            this.setState({l: this.state.l + 1})
        if(event.target.id ===  "submitButton")
            this.setState({m: this.state.m + 1})
        
    }
    drop = (event) => {

            event.preventDefault();
            var offset = event.dataTransfer.getData("text").split(',');
            this.temp = document.getElementById(offset[2]).value 
            var dm = document.getElementById(offset[2]);

            dm.style.position = "absolute";
            dm.style.left = (event.clientX ) + 'px';
            dm.style.top = (event.clientY ) + 'px';
            
            let resArray1 = [];
            resArray1 = this.state.resArray;
            let model = this.props.model;

            model.map((m) => {
                if(document.getElementById(offset[2]).id === m.key){        
                    m.value=this.temp    
                    this.res = m;
                    
                    if(this.state.i === 1 || this.state.j === 1 || this.state.k === 1 || this.state.l === 1 || this.state.m === 1){
                        this.state.resArray.push(m) ;
                        console.log("Dropped element property :", m)  
                        console.log("Dropped Components :", this.state.resArray)
                    }
                          
                }      
            })
            this.setState({resArray : resArray1})
            this.setState({status: true})
            return false;
        
    }
    allowDrop = (event) => {
        event.preventDefault();
        return false;
    }

    //This method is for dropped components redering
    previewForm = () => {   
        let previewFormUI = this.state.resArray.map( (m) => {
            let key = m.key;
            let type = m.type || "text";
            let props = m.props || {};

            return (
                <div>
                    <label className="form-label" 
                        key={m.label}
                        htmlFor={m.key}>
                        {m.label}
                    </label>
                    
                    <input {...props}
                        ref={(key) => {this[m.key]=key}} 
                        style={{left: 0, top : 0}}
                        type={type}
                        id={key}
                        onChange={(e) => {this.onChange(e,key)}}
                    />
                </div>
            );
        })
        return previewFormUI;
    }
    
   //This method is used for redering the components
    renderForm = () => {
        let model = this.props.model;
        let formUI = model.map((m) => {
            let key = m.key;
            let type = m.type || "text";
            let props = m.props || {};

            return (
                <div>
                <div className="form-group" id = "test">
                    <label className="form-label" 
                        key={m.key}
                        htmlFor={m.key}>
                        <b>{m.label}</b>
                    </label>
                    
                    <input {...props}
                        ref={(key) => {this[m.key]=key}}
                        className="handle"
                        style={{left: 0, top : 0}}
                        type={type}
                        id={key}
                        onChange={(e) => {this.onChange(e,key)}}
                        draggable = "true"
                        onDragStart={this.drag}
                    />
                </div>   
            </div>
            );
        });
        return formUI;
    }

    render() {
        let title = this.props.title || "Dynamic Form";
        return (
            <div>
                <div className={this.props.children}>
                    <h3 className="form-group">{title}</h3>
                    <form className="dynamic-form" onSubmit={(e) => {this.onSubmit(e)}}>
                        {this.renderForm()}
                        
                        <hr />
                        <div className="container" id="div1" onDrop={this.drop} onDragOver={this.allowDrop}>
                            Dropped here:
                        </div>
                        <hr />  
                    </form>  
                    
                </div>
                <div  className="previewForm">
                    <u>Rendering dropped element:</u>
                    {
                        this.state.status ? (<React.Fragment>{this.previewForm()}</React.Fragment>) : (<React.Fragment></React.Fragment>)
                    }
                </div>
            </div>
        )
    }
}

export default DynamicForm

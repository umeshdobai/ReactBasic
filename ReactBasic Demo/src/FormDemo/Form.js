import React, { Component } from 'react'

 class Form extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              username: '',
              comments: '',
              topic: 'react'
         }
     }

     handleusernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
     }

     handleCommentsChange = event => {
         this.setState({
             comments: event.target.value
         })
     }

     handleTopicChange = event => {
         this.setState({
             topic: event.target.value
         })
     }

     handleSubmit = event =>{
         alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
         event.preventDefault() //This is an important method which is used to prevent the page to be refreshed and hold the entered data in the current page
     }
     
    render() {
        const {username,comments,topic}=this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label><b>username:</b></label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={this.handleusernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={comments} 
                        onChange={this.handleCommentsChange}>
                    </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form

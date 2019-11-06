import React, { Component } from 'react'
import axios from 'axios'

 class Postform extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userId: '',
              title: '',
              body: ''
         }
     }
     changehandler = (e) =>{
            this.setState({[e.target.name] : e.target.value})
     }
     submithandler = e =>{
         e.preventDefault()
         console.log(this.state)
         axios.delete('https://jsonplaceholder.typicode.com/posts/1',this.state.userId)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
     }
    render() {
        const { userId,title, body} =this.state
        return (
            <div>
                <form onSubmit={this.submithandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changehandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changehandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changehandler} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Postform

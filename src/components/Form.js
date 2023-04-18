import React, { Component } from 'react'
import TableData from './TableData'
export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
          username: '',
          comments: '',
          topic: 'react',
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value    
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(this.state.username + " "+ this.state.comments + " "+ this.state.topic)

    }

    render() {
        const { username, comments, topic } = this.state
    return (
        <form onSubmit={this.handleSubmit}>
            <td>
                <label>Username</label>
                <input 
                    type="text" 
                    value={username}
                    onChange={this.handleUsernameChange}  
                />
            </td>
            <td>
                <label>Comments </label>
                <textarea 
                    value={comments} 
                    onChange={this.handleCommentsChange}></textarea>
            </td>
            <td>
                <label>Topic </label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>    
                </select>
            </td>
            <button type="submit">Submit </button>
        </form>
    )
  }
}

export default Form

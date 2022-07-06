import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        albumId: '',
       title: ''
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
  }
  render() {
    const { albumId, title } = this.state
    return (
      <div className='form-container'>
        <form onSubmit={this.submitHandler}>
            <div>
                ID <br/>
                <input type='text' name='albumId' value={albumId} onChange={this.changeHandler}></input>
            </div>
            <div>
                Title <br/>
                <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
            </div>
            <button className='form-submit' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
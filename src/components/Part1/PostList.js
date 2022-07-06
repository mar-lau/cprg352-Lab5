import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       error: ''
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            this.setState({ posts: response.data })
        })
        .catch(error => {
            this.setState({ error: 'Error retrieving data' })
        })
  }

  deleteRow(id, e) {
    axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(() => {
            this.setState({ posts: this.state.posts.filter(item => item.id !== id) });
        })
  }

  render() {
    const { posts, error } = this.state
    return (
      <div>
        <h1>Lists of Posts</h1>
        {   posts.length ?
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Thumbnail</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                { posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td><img src={post.thumbnailUrl}></img></td>
                        <td><button className="deleteButton" onClick={e => this.deleteRow(post.id, e)}>Delete</button></td>
                    </tr>
                )) }
            </tbody>
        </table> :
        <div>{error}</div>
        }   
      </div>
    )
  }
}

export default PostList
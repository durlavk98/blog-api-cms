import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post = ({post, deletePost, publishPost, unpublishPost}) => {
  const date = new Date(post.timestamp);
  return (
    <tr>
    <td>
      <Link to={'/posts/'+post._id}>{post.title}</Link>
    </td>
    <td>{post.author}</td>
    <td>{date.toDateString()}</td>
    <td>
      <Link to={'/edit/'+post._id}><button>edit</button></Link> |
      <button onClick={()=>{deletePost(post._id)}}>delete</button> 
    </td>
    <td>
      {
      post.published ?
      <button onClick={()=>{unpublishPost(post._id) }}>Unpublish</button> :
      <button onClick={()=>{publishPost(post._id) }}>Publish</button> 
      }
    </td>
  </tr>
  )
}

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.deletePost = this.deletePost.bind(this);
    this.publishPost = this.publishPost.bind(this);
    this.unpublishPost = this.unpublishPost.bind(this);
    this.state = {
       posts: []
    }
  }

  componentDidMount() {
    axios.get('https://arcane-caverns-09297.herokuapp.com/api/posts')
    .then(res=>{
      this.setState({
        posts:res.data
      })
    })
    .catch(err=>console.log(err))
  }

  deletePost(id) {
    axios.delete('https://arcane-caverns-09297.herokuapp.com/api/posts/'+id)
    .then(res=> console.log(res.data))
    .catch(err=>console.log(err));

    this.setState({
      posts: this.state.posts.filter(el=>el._id!==id)
    })
  }

  publishPost(id) {
    axios.post('https://arcane-caverns-09297.herokuapp.com/api/posts/'+id+'/publish')
    .then(res=> console.log(res.data));

    window.location += '';
  }

  unpublishPost(id) {
    console.log('unpublished');
    axios.post('https://arcane-caverns-09297.herokuapp.com/api/posts/'+id+'/unpublish')
    .then(res=> console.log(res.data));

    window.location += '';
  }

  postList() {
    return this.state.posts.map(post=>{
      return <Post post={post} deletePost={this.deletePost} publishPost={this.publishPost} unpublishPost={this.unpublishPost} key={post._id}/>
    })
  }
  
  render() {
    return (
      <div>
        <h3>Post List</h3>
        <table className='table'>
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Actions</th>
              <th>Publish</th>
            </tr>
          </thead>
          <tbody>
            {this.postList()}
          </tbody>
        </table>     
      </div>
    )
  }
}

export default PostList

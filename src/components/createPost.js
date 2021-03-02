import React, { Component } from 'react'
import axios from 'axios';

class CreatePost extends Component {
  constructor(props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
       title: '',
       body: '',
       author: ''
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author
    }

    axios.post('https://arcane-caverns-09297.herokuapp.com/api/posts', post)
    .then(res=> {
      console.log(res.status);
      if(res.status === 200){
        window.location = '/posts';
      }
    })

    this.setState({
      title: '',
      body: '',
      author: ''
    })
  }
  
  render() {
    return (
      <div>
        <h3>Create New Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input 
            required
            type="text"
            autoComplete='off'
            className='form-control'
            value={this.state.title}
            onChange={this.onChangeTitle}
            // ref='userInput'
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea 
            required
            type="text"
            value={this.state.body}
            className='form-control'
            onChange={this.onChangeBody}
            >
            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input 
            required
            type="text"
            className='form-control'
            value={this.state.author}
            onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <input type="button" onClick={this.onSubmit} value="Create Post" className='btn btn-primary'/>
          </div>
        </form>        
      </div>
    )
  }
}

export default CreatePost
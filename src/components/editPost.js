import React, { Component } from 'react'
import axios from 'axios';

class EditPost extends Component {
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

  componentDidMount() {
    axios.get('https://arcane-caverns-09297.herokuapp.com/api/posts/'+this.props.match.params.id)
    .then(res=>{
      this.setState({
        title: res.data.post.title,
        body: res.data.post.body,
        author: res.data.post.author
      })
    })
    .catch(err=>console.log(err));
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

    axios.put('https://arcane-caverns-09297.herokuapp.com/api/posts/'+this.props.match.params.id, post)
    .then(res=> {
      console.log(res.data);
      if(res.status === 200){
        window.location = '/posts';
      }
    })
  }
  
  render() {
    return (
      <div>
        <h3>Edit Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input 
            name="title" 
            id="title"
            required
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
            id="body" 
            type="text"
            name="body"
            className='form-control'
            value={this.state.body}
            onChange={this.onChangeBody}
            >
            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input 
            required
            type="text"
            name="author"
            className='form-control'
            value={this.state.author}
            onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Update Post" className='btn btn-primary'/>
          </div>
        </form>        
      </div>
    )
  }
}

export default EditPost
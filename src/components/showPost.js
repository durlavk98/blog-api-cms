import React, { Component } from 'react'
import axios from 'axios';
import styles from '../styles/blogStyles.module.css';

import CommentList from './commentList';

class ShowPost extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      body: '',
      author: '',
      date: '',
      id: '',
      showComments: false
    }
  }

  componentDidMount() {
    axios.get('https://arcane-caverns-09297.herokuapp.com/api/posts/'+this.props.match.params.id)
    .then(res=>{
      this.setState({
        title: res.data.post.title,
        body: res.data.post.body,
        author: res.data.post.author,
        date: res.data.post.timestamp,
        id: res.data.post._id
      })
      console.log(this.state.post);
    })
    .catch(err=>console.log(err));
  }
  
  render() {
    const date = new Date(this.state.date);
    return (
      <div className="mx-4">
        <h1 className={styles.postTitle}>{this.state.title}</h1>
        <p className="{styles.postDetails} mt-2">
          Posted On- <span style={{color:"#777"}}>{date.toDateString()}</span>, by <span style={{color:"#777"}}>{this.state.author}</span>
        </p>
        <p className={styles.postBody}>
          {this.state.body}
        </p>
        <hr style={{color:"#999"}}/>
        <button className="mx-4" onClick={()=>{this.setState({showComments: !this.state.showComments})}}>Show Comments {this.state.showComments}</button>
        {this.state.showComments &&<CommentList postid={this.state.id}/>}
        <hr style={{color:"#999"}}/>
      </div>
    )
  }
}

export default ShowPost
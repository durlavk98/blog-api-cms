import React, { Component } from 'react'
import axios from 'axios';

class CreateUser extends Component {
  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
       username: '',
       password: '',
       confirmPassword: ''
    }
  }
  
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }

    console.log(user);
    axios.post('https://arcane-caverns-09297.herokuapp.com/api/signup', user)
    .then(res=>{
      console.log(res.data);
      if(res.status === 200)
      {
        console.log('signup success');
        window.location='/posts';
      }
      else {
        console.log('signup failed');
        window.location='/';
        return;
      }
    });

    this.setState({
      username: '',
      password: '',
      confirmPassword: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
            type="text"
            required
            className='form-control'
            value={this.state.username}
            onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
            type="password"
            required
            className='form-control'
            value={this.state.password}
            onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input 
            type="password"
            required
            className='form-control'
            value={this.state.confirmPassword}
            onChange={this.onChangeConfirmPassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className='btn btn-primary'/>
          </div>
        </form>        
      </div>
    )
  }
}

export default CreateUser
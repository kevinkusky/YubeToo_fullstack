import React from 'react';

import {LAUTH} from '../../util/route_utils';
import {Link} from 'react-router-dom';

import ShowPassword from '@material-ui/icons/Visibility';
import HidePassword from '@material-ui/icons/Visibility';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      checkPassword: '',
      passwordHide: true,
      checkHide: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  navigateToSplash() {
    this.props.history.push("/");
  }

  checkToggle() {
    this.setState({ checkHide: !this.state.checkHide })
  }

  passwordToggle() {
    this.setState({ passwordHide: !this.state.passwordHide })
  }

  handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }

    let confirmInput = document.querySelector('.password-check')

    if (this.state.password === this.state.checkPassword){
      this.props.createNewUser(newUser).then(
        () => this.navigateToSplash()
      );
    } else {
      alert('Passwords Do Not Match - Please ReEnter');
      // confirmInput.setCustomValidity('Passwords Do Not Match - Please ReEnter');
    }

    // confirmInput.setCustomValidity('');
  }

  render() {
    const passwordType = this.state.passwordHide ? 'password' : 'text';
    const checkType = this.state.checkHide ? 'password' : 'text';

    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <br />
          <h3>Create your YubeToo Account</h3>
          <h5>to enjoy the full experience</h5>
          <br />
          <div className="input-container">
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              required=" "
            />
            <label className="input-labels">Username</label>
          </div>
          <br />
          <div className="input-container">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              required=" "
            />
            <label className="input-labels">Email</label>
          </div>
          <br />
          <div className="input-container">
            <input
              type={passwordType}
              value={this.state.password}
              onChange={this.update("password")}
              required
            />
            <label className="input-labels">Password</label>
            {this.state.passwordHide ? 
              <ShowPassword 
                onClick={() => this.passwordToggle()}
                className='password-toggle' 
              /> : 
              <HidePassword 
                onClick={() => this.passwordToggle()}
                className='password-toggle'  
              />
            }
          </div>
          <h6>
            Password must be 6 or more characters. We suggest using a mix of
            letters, numbers {"&"} symbols
          </h6>
          <div className='input-container'>
            <input
              type={checkType}
              value={this.state.checkPassword}
              onChange={this.update("checkPassword")}
              required
              className='password-check'
            />
            <label className='input-labels'>Confirm Password</label>
            {this.state.checkHide ?
              <ShowPassword 
                onClick={() => this.checkToggle()} 
                className='password-toggle' 
              /> :
              <HidePassword 
                onClick={() => this.checkToggle()}
                className='password-toggle' 
              />
            }
          </div>
               
          <div className="bottom-form">
            <Link className="sign-link" to={LAUTH}>
              <button className="demo-button">Sign in instead</button>
            </Link>
            <div className="demo-submit">
              <input type="submit" value="Sign Up" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
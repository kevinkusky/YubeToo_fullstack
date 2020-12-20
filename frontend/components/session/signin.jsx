import React from 'react';

import ShowPassword from '@material-ui/icons/Visibility';
import HidePassword from '@material-ui/icons/VisibilityOff';

class Signin extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
        email: '',
        password: '',
        passwordHide: true,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.populateDemo = this.populateDemo.bind(this);
  }
    
  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user);
  }

  populateDemo(e){
    e.preventDefault();
    this.setState({ email: 'test-user@gmail.com'});
    this.setState({ password: '123456'});
  }

  passwordToggle() {
    this.setState({ passwordHide: !this.state.passwordHide })
  }

  render() {
    const passwordType = this.state.passwordHide ? 'password' : 'text';

    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h3>Please Sign In</h3>
          {/* {this.renderErrors()} */}
          <div className='signin-info'>
            <div className="input-container">
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                required
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
          </div>
          <br />
          <div className="bottom-form">
            <button className="demo-button" onClick={this.populateDemo}>
              Demo Session
            </button>
            <div className="demo-submit">
              <input type="submit" value="Sign In" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
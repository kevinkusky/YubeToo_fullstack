import React from 'react';

import {LAUTH} from '../../util/route_utils';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      // checkPassword: 'Confirm Password'
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

  handleSubmit(e) {
    e.preventDefault();

    this.props.createNewUser(this.state).then(
        () => this.navigateToSplash()
    );
    // this.props.action(this.state).then(
    //     () => this.props.history.push('/videos')
    // /videos place holder until other model is built
    // );

  }

  render() {
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
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              required=" "
            />
            <label className="input-labels">Password</label>
          </div>
          <h6>
            Password must be 6 or more characters. We suggest using a mix of
            letters, numbers {"&"} symbols
          </h6>
          {/* className=password-check
                <input
                  type="password"
                  placeholder='Confirm'
                  value={this.state.checkPassword}
                  onChange={this.update("checkPassword")}
                />
                <label className='input-labels'>Password</label>
                */}
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
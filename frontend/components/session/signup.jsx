import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email_address: '',
            username: '',
            password: '',
            // checkPassword: 'Confirm Password'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(feild){
        return e => {
            this.setState({ [feild]: e.currentTarget.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
       
        this.props.createNewUser(this.state);
        // this.props.action(this.state).then(
        //     () => this.props.history.push('/videos')
            // /videos place holder until other model is built
        // );
    }

    render (){
        return (
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
                <h5>YubeToo</h5>
              <h1>Join Us!</h1>
              <label> Username:
                    <br />
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
              </label>
                    <br />
              <label> Email: 
                    <br/>
                <input
                  type="text"
                  value={this.state.email_address}
                  onChange={this.update("email_address")}
                />
              </label>
                    <br />
              <label>Password:
                    <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <h6>Password must be 6 or more characters</h6>
                    {/* <br />
              <label>Confirm Password:
                    <br />
                <input
                  type="password"
                  value={this.state.checkPassword}
                  onChange={this.update("checkPassword")}
                />
              </label> */}
                    <br />
              <input className='signup-button'type="submit" value="Sign Up" />
            </form>
          </div>
        );
    }
}

export default Signup;
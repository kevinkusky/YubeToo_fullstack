import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(feild){
        return e => {
            this.setState({ [feild]: e.currentTarget.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.createNewUser(this.state);
        this.props.action(this.state).then(
            () => this.props.history.push('/videos')
            // /videos place holder until other model is built
        );
    }
    render (){
        return (
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              <h3>Sign Up!</h3>
              <label> Email:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput("email")}
                />
              </label>
              <br />
              <label> Username:
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInput("username")}
                />
              </label>
              <br />
              <label>Password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput("password")}
                />
              </label>
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        );
    }
}

export default Signup;
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

    update(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value });
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
                    <br />
                <input
                  type="text"
                  placeholder='Username'
                  value={this.state.username}
                  onChange={this.update("username")}
                />
                    <br />
                    <br/>
                <input
                  type="text"
                  placeholder='Email'
                  value={this.state.email_address}
                  onChange={this.update("email_address")}
                />
                    <br />
                    <br />
                <input
                  type="password"
                  placeholder='Passowrd'
                  value={this.state.password}
                  onChange={this.update("password")}
                />

              <h6>Password must be 6 or more characters</h6>
              
                {/* <input
                  type="password"
                  placeholder='Confirm'
                  value={this.state.checkPassword}
                  onChange={this.update("checkPassword")}
                /> */}

                    <br />
              <input className='signup-button'type="submit" value="Sign Up" />
            </form>
          </div>
        );
    }
}

export default Signup;
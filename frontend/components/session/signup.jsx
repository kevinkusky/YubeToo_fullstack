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
          <div className="session-form-container">
            <form onSubmit={this.handleSubmit} className='session-form-box'>
                <br/>
              <h3>Join Us!</h3>
                    <br />
                    <div className='input-container'>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update("username")}
                            required=' '
                        />
                        <label className='input-labels'>Username</label>
                    </div>
                    <br />
                    <br/>
                    <div className='input-container'>
                        <input
                        type="text"
                        value={this.state.email_address}
                        onChange={this.update("email_address")}
                        required=' '
                        />
                        <label className='input-labels'>Email</label>
                    </div>
                    <br />
                    <br />
                    <div className='input-container'>
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        required=' '
                        />
                        <label className='input-labels'>Password</label>
                    </div>

              <h6>Password must be 6 or more characters</h6>
              
                {/* className=password-check
                <input
                  type="password"
                  placeholder='Confirm'
                  value={this.state.checkPassword}
                  onChange={this.update("checkPassword")}
                />
                <label className='input-labels'>Password</label>
                */}
                    <br />
              <input className='submit' type="submit" value="Sign Up" />
            </form>
          </div>
        );
    }
}

export default Signup;
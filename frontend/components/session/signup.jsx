import React from 'react';
import {Link} from 'react-router-dom';

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
              <h3>Create your YubeToo Account</h3>
              <h5>to enjoy the full experience</h5>
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
<h6>Password must be 6 or more characters. We suggest using a mix of letters, numbers {'&'} symbols</h6>
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
                <div className='bottom-form'>
                    <Link to='/login'><button>Sign in instead</button></Link>
                    <input className='submit' type="submit" value="Sign Up" />
                </div>
            </form>
          </div>
        );
    }
}

export default Signup;
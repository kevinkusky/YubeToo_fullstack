import React from 'react';

class SigninForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email_address: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(field) {
        return e => {
            this.setState( { [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.loginUser(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <br />
                    <h3>Please Sign In</h3>
                    {/* {this.renderErrors()} */}
                    {/* <div className="login-form"> */}
                    <label> Email:
                    <br />
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
                    <input className="signin-submit" 
                        type="submit"
                        value='Sign In'
                    />
                    {/* </div> */}
                </form>
            </div>
        );
    }
}

export default SigninForm;
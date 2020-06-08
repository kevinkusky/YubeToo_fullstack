import React from 'react';

class Signin extends React.Component{
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
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        this.props.loginUser(this.state);
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <br />
                    <h3>Please Sign In</h3>
                    {/* {this.renderErrors()} */}
                    <br />
                        <input
                            placeholder='Email'
                            type="text"
                            value={this.state.email_address}
                            onChange={this.update("email_address")}
                        />
                    <br />
                    <br />
                        <input
                            placeholder='Password'
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                    <br />
                    <input className="signin-submit" type="submit" value='Sign In' />
                </form>
            </div>
        );
    }
}

export default Signin;
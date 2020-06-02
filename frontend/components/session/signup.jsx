import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }
    render (){
        return(
            <div className="session-form">
                <form action="">
                    <h3>Sign Up!</h3>
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <input type="submit"
                    />
                </form>
            </div>
        )
    }
}

export default Signup;
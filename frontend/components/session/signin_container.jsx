import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/session';
// import Signup from './signup';



const mDTP = dispatch => (

    // login/out based on helped logged_in?
    {
        loginUser: user => dispatch(loginUser(user)),
        logoutUser: ()=>dispatch(logoutUser())
    }
);

// export default connect(null, mDTP)(Signup);
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';



const mDTP = dispatch =>(

    // dispatched with same name
    {
        createNewUser: user => dispatch(createNewUser(user))
    }
);

export default connect(null, mDTP)(Signup);
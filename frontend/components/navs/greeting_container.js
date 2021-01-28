import { connect } from 'react-redux';
import {logoutUser} from '../../actions/session';
import Greeting from './greeting';

const mSTP = ({ session }) => (
    {
        currentUser: session.currentUser
    }
);

const mDTP = dispatch => (
    {
        logout: () => dispatch(logoutUser())
    }
);

export default connect(mSTP, mDTP)(Greeting);
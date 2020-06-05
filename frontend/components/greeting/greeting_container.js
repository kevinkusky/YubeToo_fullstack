import { connect } from 'react-redux';
import {logoutUser} from '../../actions/session';
import Greeting from './greeting';

const mSTP = ({ session, entities: { users } }) => (
    {
        currentUser: users[session.id]
    }
);

const mDTP = dispatch => (
    {
        logout: () => dispatch(logoutUser())
    }
);

export default connect(mSTP, mDTP)(Greeting);
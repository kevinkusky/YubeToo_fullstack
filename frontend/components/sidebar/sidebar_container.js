import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mSTP = ({ session }) => (
    {
        currentUser: session.currentUser,
    }
);

export default connect(mSTP)(Sidebar);
import { connect } from 'react-redux';
import MainPage from './mainpage';

const mSTP = state => ({
    location: window.location.hash.toString().slice(1)
});

const mDTP = dispatch => ({

});

// export default connect(null)(MainPage);
export default connect(mSTP)(MainPage);
import { connect } from 'react-redux'; 
import { compose } from 'redux'; 
// import withAuth from '../../util/withAuth';
// import { logout } from '../../actions/auth';
import Header from './Component';

export const mapDispatchToProps = { logout };

// compose: higher order function - allows auth access to header;
export const enhance = compose(
    withAuth, 
    connect(null, mapDispatchToProps)
); 

export const HeaderContainer = enhance(Header);
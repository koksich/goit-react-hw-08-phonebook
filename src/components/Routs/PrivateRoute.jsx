import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to="/" replace />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

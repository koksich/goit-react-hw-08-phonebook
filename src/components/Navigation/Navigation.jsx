import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Nav, NavMenu } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Nav>
      <NavMenu to="/">Home</NavMenu>
      {isLoggedIn && <NavMenu to="/contacts">Contacts</NavMenu>}
    </Nav>
  );
};

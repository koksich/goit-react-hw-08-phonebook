import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';
import { Btn, P, Wrapper } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <Wrapper>
      <P>Welcome, {name}</P>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Btn>
    </Wrapper>
  );
};

export default UserMenu;

import { AuthMenu, Wrapper } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <Wrapper>
      <AuthMenu  to="/register">
        Register
      </AuthMenu>
      <AuthMenu  to="/login">
        Log In
      </AuthMenu>
    </Wrapper>
  );
};

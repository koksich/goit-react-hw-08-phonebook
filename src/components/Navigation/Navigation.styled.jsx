import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
gap: 10px;` 

export const NavMenu = styled(NavLink)`
  font-size: 20px;
  font-family: monospace;
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  background-color: whitesmoke;
  box-shadow: 1px 1px 1px #393e46;
  border-radius: 24px;
  transition: transform 250ms, box-shadow 250ms;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 3px 3px 3px #393e46;
  }
`;
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
gap: 15px;
align-items: center;
`;

export const P = styled.p`
  font-size: 24px;
  font-family: monospace;
border-bottom: 1px solid whitesmoke;

`;

export const Btn = styled.button`
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  display: block;
  background-color: whitesmoke;
  padding: 10px 15px;
  font-size: 20px;
  font-family: monospace;
  border-radius: 24px;
  border: none;
  outline: none;
  box-shadow: 1px 1px 1px #393e46;
  cursor: pointer;
  transition: transform 250ms, box-shadow 250ms;
  color: black;
  text-decoration: none;


  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 3px 3px 3px #393e46;
  }
`;
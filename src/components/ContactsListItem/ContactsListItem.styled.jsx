import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;

  :not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 4px;
`;

export const Btn = styled.button`
  background-color: grey;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  font-family: monospace;
  border-radius: 24px;
  border: none;
  outline: none;
  box-shadow: 1px 1px 1px #393e46;
  cursor: pointer;
  transition: transform 250ms, box-shadow 250ms;
  color: whitesmoke;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 3px 3px 3px #393e46;
  }
`;

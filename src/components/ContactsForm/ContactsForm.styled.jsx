import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  width: 450px;
  box-shadow: 1px 1px 3px black;
  padding: 20px;
  border-radius: 24px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-family: monospace;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid gray;
  outline: none;
  font-family: monospace;
  font-size: 16px;

  &:focus {
    box-shadow: 1px 1px 3px black inset;
  }
`;

export const Btn = styled.button`
  margin-inline: auto;
  display: block;
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
  margin-bottom: 15px;
  color: whitesmoke;
  text-decoration: none;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 3px 3px 3px #393e46;
  }
`;

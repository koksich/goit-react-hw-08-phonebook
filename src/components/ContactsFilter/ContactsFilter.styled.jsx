import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  width: 450px;
  padding: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-family: monospace;
  margin-bottom: 10px;
  text-align: center;
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
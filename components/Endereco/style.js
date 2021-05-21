import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 0 10px 10px;

  border: solid 5px black;
  border-radius: 5px;

  width: 90%;

  margin-top: 20px;
`;

export const Text = styled.h5`
  color: black;

  margin: 5px !important;
`;

export const Error = styled.div`
  background-color: red;
  color: white;

  font-size: 15px;

  border-radius: 5px;

  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;

  padding: 15px 0;
`;

export const Label = styled.label``;

export const Input = styled.input`
  margin: 5px 0;
`;

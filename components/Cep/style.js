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

export const Label = styled.label`
  width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 5px;
`;

export const Button = styled.input`
  width: 40%;
  margin-top: 5px;
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

export const GroupButtons = styled.div`
  width: 25%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

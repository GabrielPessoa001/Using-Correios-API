import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 70vh;
`;

export const Card = styled.div`
  margin: 5px;

  width: 90%;

  justify-content: start;

  padding: 20px 10px;

  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4) !important;
  border-radius: 5px;

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

export const NoneDiv = styled.div`
  margin-top: 15px;
`;

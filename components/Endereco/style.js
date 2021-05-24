import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
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

export const Button = styled.input`
  width: 40%;
  margin-top: 5px;
`;

export const GroupButtons = styled.div`
  width: 25%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GroupCards = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
`;

export const Card = styled.div`
  flex: 1 0 21%;
  margin: 5px;

  text-align: center;
  align-items: center;

  padding: 20px 0px;

  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4) !important;
  border-radius: 5px;

  margin-top: 20px;
`;

export const DataCard = styled.h4`
  margin: 0 !important;
`;

export const Select = styled.select``;

export const Option = styled.option``;

export const NoneDiv = styled.div`
  margin-top: 15px;
`;

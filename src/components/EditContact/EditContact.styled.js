import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-left:5px;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.3rem;
  
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-left: 0.5rem;
`;

export const SubmitButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  
  cursor: pointer;
  margin-left:0.5rem;
  

  &:hover {
    background-color: #0069d9;
  }
`;

export const CancelButton = styled.button`
  font-size: 1rem;
  padding: 0.3rem 0.6rem;
  border: none;
  border-radius: 3px;
  background-color: #ccc;
  color: #000;
  margin-top: 1rem;
  cursor: pointer;
  margin-left:0.5rem;

  &:hover {
    background-color: #b3b3b3;
  }
`;

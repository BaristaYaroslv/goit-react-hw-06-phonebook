import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 15px;
  max-width: 320px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

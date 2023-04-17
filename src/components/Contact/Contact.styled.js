import styled from 'styled-components';

export const WrapContact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #C8FACD;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #e9ecef;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const DeleteButton = styled.button`
  background-color: #F4B2B6;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #E6D5E3;
    color:#000;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.5);
  }

  &:disabled {
    background-color: #ddd;
    color: #999;
    cursor: not-allowed;
  }
`;

export const EditButton = styled.button`
  background-color: #F0FFB3;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left:10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background-color: rgb(76, 175, 80);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #ddd;
    color: #999;
    cursor: not-allowed;
  }
`;
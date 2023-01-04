import styled from 'styled-components';

export const ListItem = styled.div`
  border: 2px solid pink;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
  height: 100px;
`;

export const AddBtn = styled.div`
  border: 2px dashed pink;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: pink;
  }
`;

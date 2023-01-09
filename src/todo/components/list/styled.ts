import styled from 'styled-components';

export const ListItem = styled.div`
  border: 3px solid #98a8f8;
  background-color: #bccef8;
  padding: 20px 40px;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  :hover {
    background-color: #98a8f8;
  }
  & > div {
    height: 100%;
    /* border: 2px solid pink; */
    display: flex;
    align-items: center;
  }
`;

export const AddBtn = styled.div`
  border: 3px dashed #98a8f8;
  border-radius: 25px;
  /* background-color: #bccef8; */

  cursor: pointer;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #98a8f8;
  }
`;

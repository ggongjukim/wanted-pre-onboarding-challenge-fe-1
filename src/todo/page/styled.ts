import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 100px auto;
  font-size: 25px;
`;

export const ListContainer = styled.div`
  flex: 0.6;
  border: 2px solid pink;
  /* max-width: 800px; */
  /* margin: 0 auto; */
`;

export const DetailContainer = styled.div`
  flex: 0.4;
  border: 2px solid yellow;
  /* max-width: 400px; */
`;

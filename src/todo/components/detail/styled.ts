import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: white;
  border-radius: 25px;

  margin-left: 20px;

  display: flex;
  flex-direction: column;
  padding: 20px;
  /* div + div {
    margin-top: 20px;
  } */
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const Content = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

export const ContainerBtn = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
`;
export const Btn = styled.button`
  margin-top: auto;
  margin-left: auto;
  border: none;
  width: 50px;
  height: 30px;
  cursor: pointer;

  + button {
    margin-left: 10px;
  }
`;

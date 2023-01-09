import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;

  background-color: white;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);

  margin-left: 20px;

  display: flex;
  flex-direction: column;
  padding: 40px;
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
export const Date = styled.div`
  margin-top: auto;
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

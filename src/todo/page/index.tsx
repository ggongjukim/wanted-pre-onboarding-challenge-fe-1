import { useEffect, useState } from 'react';
import { accessClient } from 'src/commons/axiosInstance';
import { ListItem, ListAdd } from '../components/list';
import { Detail } from '../components/detail';
import * as S from './styled';

const detaildata = {
  title: 'hi',
  content: 'hello',
  id: 'z3FGrcRL55qDCFnP4KRtn',
  createdAt: '2022-07-24T14:15:55.537Z',
  updatedAt: '2022-07-24T14:15:55.537Z',
};

const Todo = () => {
  console.log('Todo');
  const title = 'todo';
  const [data, setData] = useState<any[]>();

  const getdata = async () => {
    const result = await accessClient.get(`todos`).then((res) => res.data.data);
    console.log(`result`, result);
    setData(result);
  };

  useEffect(() => {
    console.log(`effect`);
    getdata();
  }, []);

  return (
    <>
      {title}

      <S.Container>
        <S.ListContainer>
          할일 목록
          {data &&
            data.map((item: any) => <ListItem data={item} key={item.id} />)}
          <ListAdd />
        </S.ListContainer>
        <S.DetailContainer>
          상세 목록
          <Detail data={detaildata} />
        </S.DetailContainer>
      </S.Container>
    </>
  );
};
export default Todo;

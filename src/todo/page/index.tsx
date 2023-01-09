import { useEffect, useState } from 'react';
import { accessClient } from 'src/commons/axiosInstance';
import { ListItem, ListAdd } from '../components/list';
import { Detail } from '../components/detail';
import * as S from './styled';

const Todo = () => {
  console.log('Todo');
  const [data, setData] = useState<any[]>();
  const [detailId, setDetailId] = useState<string>();
  const [IsDetail, setIsDetail] = useState(false); // 상세 컴포넌트

  const getdata = async () => {
    const result = await accessClient.get(`todos`).then((res) => res.data.data);
    console.log(`result`, result);
    setData(result);
    // setDetailId(result[0].id);
  };

  useEffect(() => {
    console.log(`effect`);
    getdata();
  }, []);

  const clickHandlerListItem = (selectedId: string) => {
    setDetailId(selectedId);
    setIsDetail(true);
    console.log('selectedId ', detailId);
  };

  return (
    <>
      <S.Title>TO DO LIST</S.Title>
      <S.Container>
        <S.ListContainer>
          {data &&
            data.map((item: any) => (
              <ListItem
                data={item}
                key={item.id}
                clickHandlerListItem={clickHandlerListItem}
              />
            ))}
          <ListAdd getdata={getdata} />
        </S.ListContainer>
        <S.DetailContainer>
          {IsDetail && (
            <Detail
              detailId={detailId}
              setIsDetail={(control: any) => {
                getdata();
                setIsDetail(control);
              }}
              getData={() => getdata()}
            />
          )}
        </S.DetailContainer>
      </S.Container>
    </>
  );
};
export default Todo;

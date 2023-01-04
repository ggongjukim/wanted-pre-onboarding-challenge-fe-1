import { ListAdd } from '../components/list';
import * as S from './styled';

const Todo = () => {
  const title = 'todo';
  return (
    <>
      {title}

      <S.Container>
        <S.ListContainer>
          할일 목록
          <ListAdd />
        </S.ListContainer>
        <S.DetailContainer>상세 목록</S.DetailContainer>
      </S.Container>
    </>
  );
};
export default Todo;

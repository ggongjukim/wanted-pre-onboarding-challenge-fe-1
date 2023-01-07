import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Add } from 'src/commons/assets/add.svg';
import { AddDialog } from 'src/commons/dialog';
import * as S from './styled';

//   할일 목록
export const ListItem = (props: any) => {
  const { title, content, updatedAt, id } = props.data;
  const date = updatedAt.split('T')[0];

  const clickHandler = () => {
    props.clickHandlerListItem(id);
  };
  return (
    <S.ListItem onClick={clickHandler}>
      <div>{title}</div>
      <div>{date}</div>
    </S.ListItem>
  );
};

// 할일 추가 버튼
export const ListAdd = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <S.AddBtn onClick={handleClickOpen}>
        <Add />
      </S.AddBtn>
      {open ? <AddDialog handleClose={handleClose} /> : null}
    </>
  );
};

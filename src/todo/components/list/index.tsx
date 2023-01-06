import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Add } from 'src/commons/assets/add.svg';
import { AddDialog } from 'src/commons/dialog';
import * as S from './styled';

export const ListItem = (props: any) => {
  const { title, content, updatedAt, id } = props.data;
  const date = updatedAt.split('T')[0];
  return (
    <S.ListItem>
      <div>{title}</div>
      <div>{date}</div>
    </S.ListItem>
  );
};

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

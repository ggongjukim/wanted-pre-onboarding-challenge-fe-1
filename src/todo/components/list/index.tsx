import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Add } from 'src/commons/assets/add.svg';
import { AddDialog } from 'src/commons/dialog';
import * as S from './styled';

export const ListItem = () => {
  const title = '목록';
  return <S.ListItem>{title}</S.ListItem>;
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

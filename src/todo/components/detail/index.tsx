import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { accessClient } from 'src/commons/axiosInstance';
import * as S from './styled';

export const Content = (props: any) => {};
export const Btn = (props: any) => {
  const { btn0, btn1, clickHandler0, clickHandler1 } = props;
  return (
    <S.ContainerBtn>
      <S.Btn onClick={clickHandler0}>{btn0}</S.Btn>
      <S.Btn onClick={clickHandler1}>{btn1}</S.Btn>
    </S.ContainerBtn>
  );
};

export const Detail = (props: any) => {
  const { title, content, updatedAt } = props.data;
  const [IsEdit, setIsEdit] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const formRef = useRef<any>(null);

  const editSubmit = async (data: any) => {
    //  validataion 처리하기 => 근데 서버에서 해주긴함
    try {
      const result = await accessClient.post(`todos`, data).then((res) => res);
      console.log('result', result);
      alert(`할일이 추가 되었습니다`);
    } catch (err: any) {
      alert(err.response.data.details);
    }
  }; // api 추가, handleClose

  //  Btn clickHandler
  const clickHandlerEdit = () => {
    setIsEdit(true);
  };
  const clickHandlerDelete = () => {
    console.log(`delete`);
  };
  const clickHandlerCancel = () => {
    setIsEdit(false);
  };
  const clickHandlerDone = () => {
    console.log(`done`);
    // ref 를 이벤트를 실행
    console.log(`submit 버튼`);
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
    setIsEdit(false);
  };

  return (
    <S.Container>
      {!IsEdit ? (
        <>
          <S.Title>{title}</S.Title>
          <S.Content>{content}</S.Content>
        </>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit(editSubmit)}>
          <TextField
            autoFocus
            label="TITLE"
            multiline
            fullWidth
            maxRows={2}
            defaultValue={title}
            {...register('title')}
          />
          <TextField
            style={{ marginTop: `20px` }}
            label="CONTENT"
            multiline
            rows={4}
            fullWidth
            defaultValue={content}
            {...register('content')}
          />
          <input type="submit" style={{ display: `none` }} />
        </form>
      )}

      {!IsEdit ? (
        <Btn
          btn0="수정"
          btn1="삭제"
          clickHandler0={clickHandlerEdit}
          clickHandler1={clickHandlerDelete}
        />
      ) : (
        <Btn
          btn0="취소"
          btn1="완료"
          clickHandler0={clickHandlerCancel}
          clickHandler1={clickHandlerDone}
        />
      )}
    </S.Container>
  );
};

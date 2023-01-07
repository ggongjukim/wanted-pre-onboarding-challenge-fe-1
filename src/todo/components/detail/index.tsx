import { useState, useRef, useEffect } from 'react';
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
  // const { title, content, updatedAt, id } = props.data;
  console.log(`detail 랜더링 `, props.detailId);
  const [detaildata, setDetailData] = useState<any>();
  const [IsEdit, setIsEdit] = useState(props.IsEdit);

  const getDetaildata = async () => {
    const result = await accessClient
      .get(`/todos/${props.detailId}`)
      .then((res) => res.data.data);
    console.log(`detailresult`, result);
    setDetailData(result);
  };

  useEffect(() => {
    console.log(`Detaileffect`);
    if (props.detailId) getDetaildata();
  }, [props.detailId, props.IsEdit]);

  const { register, handleSubmit } = useForm();

  const formRef = useRef<any>(null);

  // update - put
  const editSubmit = async (data: any) => {
    //  validataion 처리하기 => 근데 서버에서 해주긴함
    try {
      const result = await accessClient
        .put(`todos/${props.detailId}`, data)
        .then((res) => res);
      console.log('result', result);
      alert(`할일이 수정 되었습니다`);
      setIsEdit(false);
    } catch (err: any) {
      alert(err.response.data.details);
    }
  }; // api 추가

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
  };

  return (
    <S.Container>
      {!IsEdit ? (
        <>
          <S.Title>{detaildata && detaildata.title}</S.Title>
          <S.Content>{detaildata && detaildata.content}</S.Content>
        </>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit(editSubmit)}>
          <TextField
            autoFocus
            label="TITLE"
            multiline
            fullWidth
            maxRows={2}
            defaultValue={detaildata && detaildata.title}
            {...register('title')}
          />
          <TextField
            style={{ marginTop: `20px` }}
            label="CONTENT"
            multiline
            rows={4}
            fullWidth
            defaultValue={detaildata && detaildata.content}
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

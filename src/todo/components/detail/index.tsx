import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { accessClient } from 'src/commons/axiosInstance';
import * as S from './styled';

export const Btn = (props: any) => {
  const { btn0, btn1, clickHandler0, clickHandler1, updatedAt } = props;
  return (
    <S.ContainerBtn>
      <S.Date>{updatedAt}</S.Date>
      <S.Btn onClick={clickHandler0}>{btn0}</S.Btn>
      <S.Btn onClick={clickHandler1}>{btn1}</S.Btn>
    </S.ContainerBtn>
  );
};

export const Detail = (props: any) => {
  console.log(`detail 랜더링 `, props.detailId);
  const [detaildata, setDetailData] = useState<any>();
  const [IsEdit, setIsEdit] = useState<boolean>(false);

  const getDetaildata = async () => {
    try {
      const result = await accessClient
        .get(`/todos/${props.detailId}`)
        .then((res) => res.data.data);
      console.log(`detailresult`, result);
      setDetailData(result);
    } catch {
      console.log('getDetaildata error');
      props.setIsDetailFalse();
    }
  };

  useEffect(() => {
    console.log(`Detaileffect`);
    if (props.detailId) getDetaildata();
    setIsEdit(false); // IsEdit false 모드
  }, [props.detailId]);

  const { register, handleSubmit, setValue } = useForm();

  const formRef = useRef<any>(null);

  // update - put
  const editSubmit = async (data: any) => {
    try {
      const result = await accessClient
        .put(`todos/${props.detailId}`, data)
        .then((res) => res);
      console.log('result', result);
      alert(`할일이 수정 되었습니다`);
      setIsEdit(false);
      // 업데이트된 내용으로 안보임 => api 재요청 ?
      getDetaildata();
      props.getData();

      // props.setIsDetail(true);
    } catch (err: any) {
      alert(err.response.data.details);
    }
  }; // api 추가

  //  Btn clickHandler
  const clickHandlerEdit = () => {
    // getDetaildata();
    setValue('title', detaildata.title);
    setValue('content', detaildata.content);

    setIsEdit(true);
  };

  //  삭제
  const clickHandlerDelete = async () => {
    try {
      const result = await accessClient
        .delete(`todos/${props.detailId}`)
        .then((res) => res);
      console.log('result', result);
      alert(`할일이 삭제 되었습니다`);
      setIsEdit(false);
      // 업데이트된 내용으로 안보임 => api 재요청 ?
      // getDetaildata();
      props.setIsDetail(false);
    } catch (err: any) {
      alert(err.response.data.details);
    }
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

  console.log(`setDetailData`, detaildata);

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
            // defaultValue={detaildata && detaildata.title} // 갱신이 안됨
            {...register('title')}
          />
          <TextField
            style={{ marginTop: `20px` }}
            label="CONTENT"
            multiline
            rows={4}
            fullWidth
            // defaultValue={detaildata && detaildata.content}
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
          updatedAt={detaildata && detaildata.updatedAt.split('T')[0]}
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

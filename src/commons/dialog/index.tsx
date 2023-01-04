import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { accessClient } from 'src/commons/axiosInstance';

export const AddDialog = (props: any) => {
  const { handleClose } = props;
  const [open, setOpen] = useState(true);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const formRef = useRef<any>(null);

  const addSubmit = async (data: any) => {
    //  validataion 처리하기 => 근데 서버에서 해주긴함
    try {
      const result = await accessClient.post(`todos`, data).then((res) => res);
      console.log('result', result);
      alert(`할일이 추가 되었습니다`);
      handleClose();
    } catch (err: any) {
      alert(err.response.data.details);
    }
  }; // api 추가, handleClose

  const submit = () => {
    // ref 를 이벤트를 실행
    console.log(`submit 버튼`);
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>할일 추가</DialogTitle>
        <DialogContent style={{ paddingTop: `20px`, width: `600px` }}>
          <form ref={formRef} onSubmit={handleSubmit(addSubmit)}>
            <TextField
              autoFocus
              label="TITLE"
              multiline
              fullWidth
              maxRows={2}
              {...register('title')}
            />
            <TextField
              style={{ marginTop: `20px` }}
              label="CONTENT"
              multiline
              rows={4}
              fullWidth
              defaultValue=""
              {...register('content')}
            />
            <input type="submit" style={{ display: `none` }} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={submit}>추가</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const AddDialog = (props: any) => {
  const { handleClose } = props;
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>할일 추가</DialogTitle>
        <DialogContent style={{ paddingTop: `20px`, width: `600px` }}>
          <TextField autoFocus label="TITLE" multiline fullWidth maxRows={2} />
          <TextField
            style={{ marginTop: `20px` }}
            label="CONTENT"
            multiline
            rows={4}
            fullWidth
            defaultValue=""
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>추가</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

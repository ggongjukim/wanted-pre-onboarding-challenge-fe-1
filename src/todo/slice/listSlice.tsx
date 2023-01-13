import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Id } from '@reduxjs/toolkit/dist/tsHelpers';
// import type { RootState } from '../../app/store';

interface IListState {
  tilte: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const initialState: IListState[] = [];

export const listSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    getTodolist: (state, action) => {
      console.log('action.payload', action.payload);
      action.payload.map((item: IListState) => state.push(item)); // 바꾸고 싶음
    },
  },
});

export const { getTodolist } = listSlice.actions;

export default listSlice.reducer;

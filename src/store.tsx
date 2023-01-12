import { configureStore } from '@reduxjs/toolkit';
import { listSlice } from './todo/slice/listSlice';
// ...

const store = configureStore({
  reducer: {
    list: listSlice.reducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;

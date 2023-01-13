import { accessClient } from 'src/commons/axiosInstance';

export const getdata = async () => {
  const result = await accessClient.get(`todos`).then((res) => res.data.data);
  console.log(`result`, result);
  return result;
  // listSlice 에 넣기
  // dispatch(listSlice.actions.getTodolist(result));
  // setData(result);
  // setDetailId(result[0].id);
};

import { accessClient } from 'src/commons/axiosInstance';

export const getdata = async () => {
  const result = await accessClient.get(`todos`).then((res) => res.data.data);
  console.log(`result`, result);
  // listSclie 에 넣기
  // setData(result);
  // setDetailId(result[0].id);
};

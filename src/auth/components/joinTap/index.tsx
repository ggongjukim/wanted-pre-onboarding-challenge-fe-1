import { useForm } from 'react-hook-form';
import { client } from 'src/commons/axiosInstance';

const JoinTap = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const joinSubmit = async (data: any) => {
    //  validataion 해야 통과하도록 처리하기
    try {
      const result: any = await client
        .post(`users/create`, data)
        .then((res) => res.data);
      // console.log(`result`, result);
      alert(result.message);
    } catch (err: any) {
      console.log(err.response.data.details);
      alert(err.response.data.details);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(joinSubmit)}>
        <label>이메일</label>
        <input {...register('email')} />
        <label>비밀번호</label>
        <input {...register('password')} type="password" />
        <input type="submit" value="JOIN" />
      </form>
    </>
  );
};

export default JoinTap;

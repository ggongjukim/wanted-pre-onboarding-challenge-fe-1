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
  const joinSubmit = (data: any) => {
    console.log('data', data);
    client.post(`/users/create`, data).then((res: any) => console.log(res));
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

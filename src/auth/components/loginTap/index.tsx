import { useForm } from 'react-hook-form';
import { client } from 'src/commons/axiosInstance';

const LoginTap = () => {
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
  const loginSubmit = (data: any) => {
    console.log('data', data);
    client.post(`/users/login`, data).then((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <label>이메일</label>
        <input {...register('email')} />
        <label>비밀번호</label>
        <input {...register('password')} type="password" />
        <input type="submit" value="LOGIN" />
      </form>
    </>
  );
};

export default LoginTap;

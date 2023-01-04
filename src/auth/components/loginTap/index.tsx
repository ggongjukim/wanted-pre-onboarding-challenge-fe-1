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
  const loginSubmit = async (data: any) => {
    //  validation 해야 통과하도록 처리하기
    try {
      const result: any = await client
        .post(`users/login`, data)
        .then((res) => res.data);
      // console.log('result', result);
      localStorage.setItem('token', result.token);
      alert(result.message);
    } catch (err: any) {
      console.log(err.response.data);
      alert(`아이디와 비밀번호를 확인해주세요`);
    }
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

import { useForm } from "react-hook-form";
import { client } from "../../../AxiosInstance";

const JoinTap= () => {
    const title = "회원가입을 하세요";
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm({
        defaultValues: {
          email: "",
          password: ""
        }
      });
    const onSubmit = (data:any)=>{
        console.log('data',data);
        client.post(`/users/create`,data).then((res:any)=>console.log(res))
    }

    return <>{title}
        <form onSubmit={handleSubmit(onSubmit)}>
      <label>이메일</label>
      <input  {...register("email")}/>
      <label>비밀번호</label>
      <input  {...register("password")} type="password"/>
      <input type="submit" />
    </form></>
}

export default JoinTap;
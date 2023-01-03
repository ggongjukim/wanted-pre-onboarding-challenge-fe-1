import React, { useState } from "react";
import LoginTap from "../components/loginTap";
import JoinTap from "../components/joinTap";
import * as S from "./styled";

interface IMode {
    [index: string]: JSX.Element;
    LOGIN: JSX.Element;
    JOIN: JSX.Element;
  }
  
const Mode: IMode = {
    LOGIN: <LoginTap />,
    JOIN: <JoinTap />,
  };
const Auth = () => {
    const temp ="title";
    return <>
    <span>로그인</span>
    <span>회원가입</span>
    <S.ContentTap>{Mode.JOIN}</S.ContentTap>
    </>
};

export default Auth;

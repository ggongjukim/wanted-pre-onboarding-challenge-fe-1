import React, { useState } from 'react';
import LoginTap from '../components/loginTap';
import JoinTap from '../components/joinTap';
import * as S from './styled';

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
  const [mode, setMode] = useState(`LOGIN`);
  return (
    <>
      <S.Title>
        <div role="presentation" onClick={() => setMode(`LOGIN`)}>
          로그인
          {mode === `LOGIN` ? <S.TapUnderline layoutId="underline" /> : null}
        </div>

        <div role="presentation" onClick={() => setMode(`JOIN`)}>
          회원가입
          {mode === `JOIN` ? <S.TapUnderline layoutId="underline" /> : null}
        </div>
      </S.Title>
      <S.ContentTap>{Mode[mode]}</S.ContentTap>
    </>
  );
};

export default Auth;

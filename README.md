# [0차] 사전과제 구현 항목과 결과

### 사용 스택
```
- View (React with typescript, react-router-dom, react-hook-form)
- Style (@mui/materia, @emotion/styled, react-hook-form, framer-motion)
- Build Tool (Create React App)
- Code Quality Tool (Prettier, EsLint)
```
### 디렉토리 구조
```
src
├─auth 
│  ├─components
│  │  ├─joinTap
│  │  └─loginTap
│  ├─page           
│  └─utils
├─commons           
│  ├─assets
│  ├─axiosInstance    
│  └─dialog         
└─todo 
    ├─components
    │  ├─detail
    │  └─list
    └─page              
``` 

### 향후 계획
[1차] 리팩토링 : `react-query` 와 `redux toolkit` 을 사용해 리펙토링할 예정 + 배포       
[2차] 리팩토링 : `react-query` 와 `recoil`을 사용해 리펙토링할 예정

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다       
  - [x] 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다 =>같은 경로에 위치
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다 => **추후 구현 예정**
  - [ ] 이메일 조건 : 최소 `@`, `.` 포함
  - [ ] 비밀번호 조건 : 8자 이상 입력
  - [ ] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
  - [x] 회원가입시, 자동로그인 => `useNavigate`

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다. =>`Dialog` 로 구현
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요. => **온보딩을 통해 공부하고 구현할 예정**
  - [ ] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다 => **리펙토링 예정**
  
### 기능 설명 with Screenshot
 
- 로그인 / 회원가입 
    - `/auth`
    - `react hook form`
    - `framer motion`
![localhost_3000_auth (3)](https://user-images.githubusercontent.com/75241542/211576609-6a7ce0b0-8f2d-43dd-9e70-78b922dc0d75.png)

- To do List
  -  `/`   
![localhost_3000_](https://user-images.githubusercontent.com/75241542/211576288-b52a451d-4f22-46b3-82ae-e8ea613e815f.png)
![localhost_3000_ (1)](https://user-images.githubusercontent.com/75241542/211576874-c149b6ea-6769-4e90-aeb5-42081aaaf777.png)
![localhost_3000_ (2)](https://user-images.githubusercontent.com/75241542/211577373-33b8582f-b479-46ae-be02-9889e64ab5b0.png)
![localhost_3000_ (3)](https://user-images.githubusercontent.com/75241542/211577837-de793e6d-18f3-4428-824b-919187ae4516.png)

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Todo from './todo/page';
import Auth from './auth/page';


const token = () => localStorage.getItem('token');
const GoToDo = () => <>{token() ? <Todo /> : <Navigate to="/auth" />}</>;
const GoToAuth = () => <>{token() ? <Navigate to="/" /> : <Auth />}</>;

const Router = () => {
  console.log(`router`);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoToDo />} />
        <Route path="/auth" element={<GoToAuth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './todo/page';
import Auth from './auth/page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

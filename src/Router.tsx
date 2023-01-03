import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './auth/page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

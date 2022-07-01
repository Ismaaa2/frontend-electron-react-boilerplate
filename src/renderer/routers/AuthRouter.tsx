/* eslint-disable no-console */
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';

const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<AuthPage />} />

        <Route path="*" element={<AuthPage />} />
      </Routes>
    </div>
  );
};
export default AuthRouter;

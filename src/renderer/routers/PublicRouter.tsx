/* eslint-disable no-constant-condition */
/* eslint-disable import/no-cycle */
import { Navigate } from 'react-router-dom';
import AuthRouter from './AuthRouter';

const PublicRouter = () => (true ? <AuthRouter /> : <Navigate to="/" />);
export default PublicRouter;

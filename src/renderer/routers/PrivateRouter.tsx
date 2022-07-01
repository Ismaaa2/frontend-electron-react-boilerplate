/* eslint-disable no-constant-condition */
import { Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PrivateRouter = () => (false ? <HomePage /> : <Navigate to="/auth/" />);
export default PrivateRouter;

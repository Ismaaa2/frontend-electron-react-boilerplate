import { HashRouter, Routes, Route } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const AppRouter = () => {
  //! Rutas de toda la aplicación.
  return (
    <HashRouter>
      <div>
        <Routes>
          {
            //! Ruta pública.
          }
          <Route path="/auth/*" element={<PublicRouter />} />
          {
            //! Ruta privada.
          }
          <Route path="/" element={<PrivateRouter />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
export default AppRouter;

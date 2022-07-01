/* eslint-disable prettier/prettier */
import { Provider } from 'react-redux';
import { ToastrProvider } from './context/ToastrContext';
import AppRouter from './routers/AppRouter';
import store from './store/store';

import './toastr.css';
import './toastr';
import './css/app.css';


const MusicApp = () => {
  return (
    <Provider store={store}>
      <ToastrProvider >
        <AppRouter />
      </ToastrProvider>
    </Provider>
  );
};

export default MusicApp;

/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';
import Toastr from 'toastr';

export const ToastrContext = createContext({Toastr});

export const ToastrProvider = ({ children }) => {
  return (
    <ToastrContext.Provider value={{Toastr}}>
      { children }
    </ToastrContext.Provider>
  );
};

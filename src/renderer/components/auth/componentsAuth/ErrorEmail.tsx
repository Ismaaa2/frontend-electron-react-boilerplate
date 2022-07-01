/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ToastrContext } from '../../../context/ToastrContext';


const ErrorEmail = ({ errors }) => {

  const {Toastr} = useContext(ToastrContext);

  console.log('dentro');

  if (errors.email?.type === 'required') {
    Toastr.error('Error', 'El email es necesario para continuar!');
  } else if (errors.email?.type === 'validate') {
    Toastr.error('Error', 'El email no es correcto!');
  }

  return <></>
};
export default ErrorEmail;

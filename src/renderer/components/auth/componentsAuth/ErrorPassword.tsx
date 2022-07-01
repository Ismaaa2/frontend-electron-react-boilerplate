/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */


const ErrorPassword = ({ errors }) => {
  return (
    <>
      {errors.password?.type === "required" && (
        <p className="alert-red">La contraseña es necesaria.</p>
      )}
      {errors.password?.type === "minLength" && (
        <p className="alert-red">
          La contraseña debe tener al menos 5 carácteres.
        </p>
      )}
    </>
  );
};
export default ErrorPassword;

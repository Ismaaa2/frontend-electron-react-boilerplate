/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */


const ErrorName = ({ errors }) => {
  return (
    <>
      {errors.name?.type === "required" && (
        <p className="alert-red">El nombre es necesario.</p>
      )}
      {errors.name?.type === "minLength" && (
        <p className="alert-red">El nombre debe tener más de 2 caracteres.</p>
      )}
    </>
  );
};

export default ErrorName;

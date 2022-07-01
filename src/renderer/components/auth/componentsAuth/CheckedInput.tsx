/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

const CheckedInput = ({ register }) => {
  return (
    <>
      <input
        type="checkbox"
        id="checkbox-1-1"
        className="custom-checkbox"
        {...register('check', { required: false })}
      />
      <label htmlFor="checkbox-1-1">Recordar</label>
    </>
  );
};
export default CheckedInput;

/* eslint-disable no-unneeded-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';

import { handleEmailValidation } from '../../helpers/form';
import CheckedInput from './componentsAuth/CheckedInput';
import ErrorEmail from './componentsAuth/ErrorEmail';
import ErrorPassword from './componentsAuth/ErrorPassword';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  console.log(Object.entries(errors).length);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="text"
        id="email"
        {...register('email', {
          required: true,
          validate: handleEmailValidation,
        })}
      />
      <span>Email</span>
      <ErrorEmail errors={errors} />

      <input
        type="password"
        id="password"
        className="text"
        {...register('password', { required: true, minLength: 5 })}
      />
      <span>password</span>
      <ErrorPassword errors={errors} />

      <br />

      <CheckedInput register={register} />

      <button
        disabled={Object.entries(errors).length === 0 ? false : true}
        className={`${
          Object.entries(errors).length === 0 ? 'signin' : 'signin-block'
        }`}
        type="submit"
      >
        Sign In
      </button>

      <hr />
    </form>
  );
};
export default Login;

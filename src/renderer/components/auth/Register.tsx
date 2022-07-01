/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable spaced-comment */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authRegisterWithEmailPassword } from '../../actions/authActions';
import { handleEmailValidation } from '../../helpers/form';

import CheckedInput from './componentsAuth/CheckedInput';
import ErrorEmail from './componentsAuth/ErrorEmail';
import ErrorName from './componentsAuth/ErrorName';
import ErrorPassword from './componentsAuth/ErrorPassword';

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (data.check) localStorage.setItem('email-music', data.email);

    //TODO: Dispatch
    dispatch<any>(authRegisterWithEmailPassword(data));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="text"
        id="name"
        {...register('name', { required: true, minLength: 2 })}
      />
      <span>Nombre</span>
      <ErrorName errors={errors} />
      <br />

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

      <br />

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
        Sign Up
      </button>

      <hr />
    </form>
  );
};
export default Register;

/* eslint-disable prettier/prettier */
import types from '../types/types';

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});

export const removeError = () => ({
  type: types.uiRemoveError,
  payload: null,
});

export const uiStartLoading = () => ({
  type: types.uiStartLoading,
});

export const uiFinishLoading = () => ({
  type: types.uiFinishLoading,
});

import * as yup from 'yup';
import { woodEnum } from '../types/woodEnum';

export const wandSchema = yup
  .object({
    flexibility: yup.string().required('Flexibility is required'),
    length: yup.number().positive().required('Length is required'),
    owner: yup.string().required('Owner is required'),
    wood: yup.string().oneOf(woodEnum).required('Wood is required'),
  })
  .required();

export const userSchema = yup
  .object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

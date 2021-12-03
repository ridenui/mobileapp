import * as Yup from 'yup';

export const CredentialsSchema = Yup.object().shape({
  host: Yup.string().required(),
  port: Yup.number().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
});

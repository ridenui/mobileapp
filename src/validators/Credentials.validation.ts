import * as Yup from 'yup';
import { Credentials } from '../types/Generic';

export const CredentialsSchema = Yup.object().shape({
  host: Yup.string().required(),
  port: Yup.number().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export async function areValidCredentials(credentials: Credentials): Promise<boolean> {
  console.log(credentials);
  console.log('checking validity.');
  return CredentialsSchema.isValid(credentials);
}

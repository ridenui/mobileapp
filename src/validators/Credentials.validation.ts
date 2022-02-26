import * as Yup from 'yup';
import type { Credentials } from '../types/Generic';

export const CredentialsSchema = Yup.object().shape({
  host: Yup.string().required(),
  port: Yup.number().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export async function areValidCredentials(credentials: Credentials): Promise<boolean> {
  return CredentialsSchema.isValid(credentials);
}

import { verify } from 'argon2';

export default async function verifyPassword(
  hash: string,
  password: string,
): Promise<boolean> {
  return await verify(hash, password);
}

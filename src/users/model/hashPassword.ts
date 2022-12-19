import { hash, argon2i } from 'argon2';

export default async function hashPassword(password: string) {
  return await hash(password, { type: argon2i, hashLength: 60 });
}

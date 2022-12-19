export class User {
  id: number;
  username: string;
  email: string;
  password_digest: string;
}

export class DisplayUser extends User {
  password_digest: undefined;
}

import { User } from "./entities/user.entity";
import { UsersModel } from "./users.model";

describe("UsersModel", () => {
  let model: UsersModel;

  beforeEach(() => {
    const users: User[] = [];
    model = new UsersModel(users);
  });

  it('should hash password', async () => {
    const testPassword = 'p4ssw0rdorsomething';
    const hash = await model.hashPassword(testPassword);

    expect(hash).not.toEqual(testPassword);
  });

  it('should verify if password and hash match', async () => {
    const testPassword = 'p4ssw0rdorsomething';
    const hash = await model.hashPassword(testPassword);
    const verified = await model.verifyPassword(hash, testPassword);

    expect(verified).toEqual(true);
  });
});
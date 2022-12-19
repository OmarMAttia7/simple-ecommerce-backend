import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import hashPassword from './model/hashPassword';
import verifyPassword from './model/verifyPassword';

export class UsersModel {
  users: User[];
  constructor(users: User[]) {
    this.users = users;
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.hashPassword(createUserDto.password);
    const user = {
      id: this.users.length + 1,
      username: createUserDto.username,
      email: createUserDto.email,
      password_digest: hashedPassword,
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (user.id === id) return user;
    }
    return undefined;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.users = this.users.filter((user) => {
      if (user.id === id) return false;
      return true;
    });
  }

  async hashPassword(password: string): Promise<string> {
    return await hashPassword(password);
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return await verifyPassword(hash, password);
  }
}

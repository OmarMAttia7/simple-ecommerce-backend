import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

export class UsersModel {
  users: User[];
  constructor(users: User[]) {
    this.users = users;
  }

  create(createUserDto: CreateUserDto) {
    return this.users.push({
      id: this.users.length + 1,
      username: createUserDto.username,
      email: createUserDto.email,
      password_digest: createUserDto.password + 'hashed',
    });
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
}

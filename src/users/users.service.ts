import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersModel } from './users.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  private readonly model: UsersModel = new UsersModel(this.users);

  create(createUserDto: CreateUserDto) {
    return this.model.create(createUserDto);
  }

  findAll() {
    return this.model.findAll();
  }

  findOne(id: number) {
    return this.model.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.model.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.model.remove(id);
  }

  async hashPassword(password: string): Promise<string> {
    return await this.model.hashPassword(password);
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return await this.model.verifyPassword(hash, password);
  }
}

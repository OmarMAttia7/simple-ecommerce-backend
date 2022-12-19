import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import hashPassword from './model/hashPassword';
import verifyPassword from './model/verifyPassword';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password_digest = await this.hashPassword(createUserDto.password);

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userToUpdate = await this.userRepository.findOneBy({ id: id });
    for (const property in updateUserDto) {
      userToUpdate[property] = updateUserDto[property];
    }
    return await this.userRepository.save(userToUpdate);
  }

  async remove(id: number) {
    const userToRemove = await this.userRepository.findOneBy({ id: id });
    return await this.userRepository.delete(userToRemove);
  }

  async hashPassword(password: string): Promise<string> {
    return await hashPassword(password);
  }

  async verifyPassword(hash: string, password: string): Promise<boolean> {
    return await verifyPassword(hash, password);
  }
}

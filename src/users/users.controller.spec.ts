import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersController', () => {
  let controller: UsersController;

  const testUser: CreateUserDto = {
    username: 'omarmattia7',
    email: 'om79135@example.com',
    password: '1234567',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new user', () => {
    expect(controller.create(testUser)).toBeDefined();
  });

  it('should return all users', async () => {
    const user = await controller.create(testUser);
    expect(controller.findAll()).toContainEqual<User>(user);
  });

  it('should return a user by id', async () => {
    const user = await controller.create(testUser);
    expect(controller.findOne('1')).toEqual<User>(user);
  });

  it('should delete a user by id', () => {
    controller.create(testUser);
    controller.remove('1');
    expect(controller.findOne('1')).toBeUndefined();
  });
});

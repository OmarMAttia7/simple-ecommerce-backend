import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should hash password', async () => {
    const testPassword = 'p4ssw0rdorsomething';
    const hash = await service.hashPassword(testPassword);

    expect(hash).not.toEqual(testPassword);
  });

  it('should verify if password and hash match', async () => {
    const testPassword = 'p4ssw0rdorsomething';
    const hash = await service.hashPassword(testPassword);
    const verified = await service.verifyPassword(hash, testPassword);

    expect(verified).toEqual(true);
  });
});

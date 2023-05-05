import { Injectable } from '@nestjs/common';
import { User } from './Interfaces/user.interface';
import { CreateUserDTO } from './DTO/createUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDTO: CreateUserDTO): Promise<User | Error> {
    const saltRounds = 10;
    const passwordHashed = await hash(createUserDTO.password, saltRounds);
    return {
      ...createUserDTO,
      id: 1,
    };
  }
}

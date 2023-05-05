import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './DTO/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return JSON.stringify({ text: 'abc' });
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDTO) {
    return this.userService.createUser(createUser);
  }
}

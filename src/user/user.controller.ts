import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './DTO/createUser.dto';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({ text: 'abc' });
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDTO) {
    return createUser;
  }
}

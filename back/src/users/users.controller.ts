import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ValidationPipe, Param } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create_user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getUserById(@Param('id') id: number) {
    return await this.usersService.getUserById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) // Transformation automatique de DTO
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateUser(
    @Param('id') id: number,
    @Body() createUserDto: CreateUserDto,
  ) {
    return await this.usersService.updateUser(id, createUserDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteUser(@Param('id') id: number) {
    return await this.usersService.deleteUser(id);
  }
}

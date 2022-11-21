import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './entities/user.model';
import { UserService } from './services/user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
      return this.userService.create(createUserDto);
    }


    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
      return this.userService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.userService.remove(id);
    }

}
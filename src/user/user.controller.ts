import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { User } from 'libs/models/user.entity';
import { UserService } from 'libs/user/src';
import { CreateUserDto } from 'libs/user/src/dto/create-user.dto';
import { UpdateUserDto } from 'libs/user/src/dto/update-user.dto';

@Controller('user')
export class UserController {
    @Inject(UserService)
    private readonly userService: UserService;

    @Get()
    async find(): Promise<User[]> {
        return this.userService.find()
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        return this.userService.findOne(id)
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Patch(":id")
    async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto)
    }

    @Delete(":id") 
    async remove(@Param("id") id: string) {
        return this.userService.remove(id)
    }
}

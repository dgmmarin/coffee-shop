import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/services/auth/constants';
import { EntityNotFoundFilter } from 'src/filters/entity-not-found/entity-not-found.filter';
import { HttpExceptionFilterFilter } from 'src/filters/http-exception-filter/http-exception-filter.filter';
import { ValidationFilter } from 'src/filters/validation/validation.filter';
import { CreateRoleDto } from './dto/add-role.dro';
import { Roles } from 'src/services/auth/roles/roles.decorators';
import { Role } from 'src/services/auth/roles/role.enum';

@Controller('user')
@UseFilters(new HttpExceptionFilterFilter(), new EntityNotFoundFilter())
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Roles( Role.Admin)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Post(':id/role')
  addRole(@Param('id') id: string, @Body() addRole: CreateRoleDto) {
    return this.userService.addRole(+id, addRole);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

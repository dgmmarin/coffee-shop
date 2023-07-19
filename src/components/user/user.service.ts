import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from '../role/entities/role.entity';
import { CreateRoleDto } from './dto/add-role.dro';
import { RoleService } from '../role/role.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @Inject(RoleService) private roleService: RoleService,
  ){}
  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const user = new User();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.password = hash;
    return await this.userRepository.save(user);
  }

  async findAll() {
   return await this.userRepository.find()
  }

  async findOne(id: number) {
    let usr = await this.userRepository.findOneOrFail({
      where:{
        id:id
      },
      relations:{
        roles: true
      }
    })
    return usr 
  }

  async findOneByEmail(email: string) {
    let usr = await this.userRepository.findOneOrFail({
      where:{
        email:email
      },
      relations:{
        roles: true
      }
    }) 
    return usr
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let usr = await this.findOne(id)
    usr.email = updateUserDto.email ?? usr.email;
    usr.firstName = updateUserDto.firstName ?? usr.firstName;
    usr.lastName = updateUserDto.lastName ?? usr.lastName;
    return await this.userRepository.save(usr);
  }

  async addRole(id: number,  addRole: CreateRoleDto) {
    let usr = await this.findOne(id);
    let role = await this.roleService.findOne(addRole.roleId);
    usr.roles.push(role);
    return await this.userRepository.save(usr);
  }

  async remove(id: number) {
    return await this.userRepository.softDelete({id:id})
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.email = createUserDto.email
    user.firstName = createUserDto.firstName
    user.lastName = createUserDto.lastName
    user.password = createUserDto.password
    return await this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return await this.userRepository.findOneOrFail({
      where:{
        id:id
      }
    }) 
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOneOrFail({
      where:{
        email:email
      }
    }) 
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

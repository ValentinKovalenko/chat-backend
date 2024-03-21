import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  async findUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.email = createUserDto.email;
    user.password = await this.hashPassword(createUserDto.password);
    return this.userRepository.save(user);
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.fullName = updateUserDto.fullName;
    user.age = updateUserDto.age;
    user.email = updateUserDto.email;
    user.nickName = updateUserDto.nickName;
    user.password = updateUserDto.password;
    user.id = id;
    return this.userRepository.save(user);
  }
}

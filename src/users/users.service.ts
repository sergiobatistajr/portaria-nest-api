import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.usersRepository.save(createUserDto);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        return {
          message: ['User already exists'],
          statusCode: HttpStatus.CONFLICT,
          error: error.message,
        };
      }
      throw error;
    }
  }

  async findOne(username: string) {
    return await this.usersRepository.findOneOrFail({ where: { username } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }
}

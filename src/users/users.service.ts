import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entity';
import { City } from 'src/cities/entities/city.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const city = await this.cityRepository.findOne({ where: { id: createUserDto.city_id } });
    if (!city) {
      throw new Error('La ciudad no existe');
    }

    const newUser = this.userRepository.create({
      ...createUserDto,
      city,
    });

    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findAllUsers() {
    return this.userRepository.find({ where: { role: 'user' } });
  }
  
  async findAllDoctors() {
    return this.userRepository.find({ where: { role: 'doctor' } });
  }
  
  

  async findOneByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

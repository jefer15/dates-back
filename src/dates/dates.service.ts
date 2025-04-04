import { Injectable } from '@nestjs/common';
import { CreateDateDto } from './dto/create-date.dto';
import { UpdateDateDto } from './dto/update-date.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';

import { Appointment } from './entities/date.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DatesService {
  constructor(
    @InjectRepository(Appointment)
    private dateRepository: Repository<Appointment>,
    private userService: UsersService,
  ) { }
  async create(createDateDto: CreateDateDto) {
    const patient = await this.userService.findOne(createDateDto.patient_id);
    const doctor = await this.userService.findOne(createDateDto.doctor_id);

    const date = this.dateRepository.create({
      date: new Date(createDateDto.date),
      patient,
      doctor,
      speciality: createDateDto.speciality,
    } as DeepPartial<Appointment>);

    return this.dateRepository.save(date);
  }

  findOne(id: number) {
    return `This action returns a #${id} date`;
  }

  findAll() {
    return this.dateRepository.find({
      relations: ['patient', 'doctor']
    });
  }

  findOneByPatient(patient_id: string) {
    return this.dateRepository.find({
      where: { patient: { id: patient_id } },
      relations: ['patient', 'doctor']
    })
  }

  update(id: number, updateDateDto: UpdateDateDto) {
    return `This action updates a #${id} date`;
  }

  remove(id: number) {
    return `This action removes a #${id} date`;
  }
}

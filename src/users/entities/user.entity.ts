import { Entity, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from 'src/cities/entities/city.entity';
import { Appointment } from 'src/dates/entities/date.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
 @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => City, (city) => city.users)
  city: City;

  @OneToMany(() => Appointment, (date) => date.doctor)
  doctorDates: Appointment[];

  @OneToMany(() => Appointment, (date) => date.patient)
  patientDates: Appointment[];
}

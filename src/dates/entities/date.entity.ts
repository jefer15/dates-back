import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User} from 'src/users/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.patientDates)
  patient: User;

  @ManyToOne(() => User, (user) => user.doctorDates)
  doctor: User;

  @Column()
  speciality: string;
}

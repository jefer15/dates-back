import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Country } from 'src/countries/entities/country.entity';

@Entity()
export class City {
@PrimaryColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @ManyToOne(() => Country, (country) => country.cities)
  country: Country;

  @OneToMany(() => User, (user) => user.city)
  users: User[];
}

import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { City } from 'src/cities/entities/city.entity';

@Entity()
export class Country {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => City, (city) => city.country)
    cities: City[];
}

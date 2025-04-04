import { IsString, IsNotEmpty, IsDateString, IsDate } from 'class-validator';

export class CreateDateDto {
  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  patient_id: string;

  @IsString()
  @IsNotEmpty()
  doctor_id: string;

  @IsString()
  @IsNotEmpty()
  speciality: string;
}

import { Module } from '@nestjs/common';
import { DatesService } from './dates.service';
import { DatesController } from './dates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/date.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment]), UsersModule, AuthModule],
  controllers: [DatesController],
  providers: [DatesService],
})
export class DatesModule {}

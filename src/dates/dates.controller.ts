import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DatesService } from './dates.service';
import { CreateDateDto } from './dto/create-date.dto';
import { UpdateDateDto } from './dto/update-date.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('dates')
export class DatesController {
  constructor(private readonly datesService: DatesService) {}

  @Post()
  create(@Body() createDateDto: CreateDateDto) {
    return this.datesService.create(createDateDto);
  }

  @Get('patient/:id')
  findByPaciente(@Param('id') patient_id: string) {
    return this.datesService.findOneByPatient(patient_id);
  }

  @Get()
  findAll() {
    return this.datesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDateDto: UpdateDateDto) {
    return this.datesService.update(+id, updateDateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datesService.remove(+id);
  }
}

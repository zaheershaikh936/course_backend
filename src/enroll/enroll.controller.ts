import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { EnrollService } from './enroll.service';

@Controller('enroll')
export class EnrollController {
  constructor(private readonly enrollService: EnrollService) {}

  @Post()
  create(@Body() createEnrollDto: CreateEnrollDto) {
    return this.enrollService.create(createEnrollDto);
  }

  @Get()
  findAll() {
    return this.enrollService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrollService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnrollDto: any) {
    return this.enrollService.update(+id, updateEnrollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrollService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrollSchema } from 'src/entities/enroll.entity';
import { EnrollController } from './enroll.controller';
import { EnrollService } from './enroll.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'enroll', schema: EnrollSchema }]),
  ],
  controllers: [EnrollController],
  providers: [EnrollService],
})
export class EnrollModule {}

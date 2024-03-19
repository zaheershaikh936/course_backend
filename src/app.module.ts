import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { CourseModule } from './course/course.module';
import { EnrollModule } from './enroll/enroll.module';

@Module({
  imports: [
    MongooseModule.forRoot(String(process.env.DB)),
    CourseModule,
    EnrollModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Course } from './course.entity';

export type CourseDocument = HydratedDocument<Course>;

@Schema({ versionKey: false })
export class Enroll {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courses',
    required: true,
  })
  courseId: Course;

  @Prop({ type: String, required: true })
  progressTopic: string;

  @Prop({ type: Number, required: true })
  progress: number;
}

export const EnrollSchema = SchemaFactory.createForClass(Enroll);

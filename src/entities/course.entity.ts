import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type CourseDocument = HydratedDocument<Course>;

@Schema({ versionKey: false })
export class Course {
  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  instructor: string;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: Date, required: true, default: new Date() })
  createAt: Date;

  @Prop({ type: Date, required: true, default: new Date() })
  updateAt: Date;
}
export const CourseSchema = SchemaFactory.createForClass(Course);

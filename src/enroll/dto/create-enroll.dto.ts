import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEnrollDto {
  @IsString()
  @IsNotEmpty()
  courseId: string;

  @IsString()
  @IsNotEmpty()
  progressTopic: string;

  @IsNumber()
  @IsNotEmpty()
  progress: number;
}

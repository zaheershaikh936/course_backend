import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enroll } from 'src/entities/enroll.entity';
import { CreateEnrollDto } from './dto/create-enroll.dto';

@Injectable()
export class EnrollService {
  constructor(@InjectModel('enroll') private enrollModel: Model<Enroll>) {}

  async create(createEnrollDto: CreateEnrollDto) {
    return await this.enrollModel.create(createEnrollDto);
  }

  async findAll() {
    return await this.enrollModel.aggregate([
      {
        $lookup: {
          from: 'courses',
          let: {
            courseId: '$courseId',
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    {
                      $eq: ['$_id', '$$courseId'],
                    },
                  ],
                },
              },
            },
            {
              $project: {
                _id: 0,
                title: 1,
                image: 1,
                description: 1,
              },
            },
          ],
          as: 'course',
        },
      },
      {
        $project: {
          title: {
            $first: '$course.title',
          },
          image: {
            $first: '$course.image',
          },
          description: {
            $first: '$course.description',
          },
          progressTopic: 1,
          progress: 1,
        },
      },
    ]);
  }

  findOne(id: number) {
    return `This action returns a #${id} enroll`;
  }

  update(id: number, updateEnrollDto: any) {
    return `This action updates a #${id} enroll ${updateEnrollDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} enroll`;
  }
}

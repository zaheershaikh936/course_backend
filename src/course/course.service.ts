import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from 'src/entities/course.entity';
import { CreateCourseDto, searchT } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel('course') private courseModel: Model<Course>) {}
  async create(createCourseDto: CreateCourseDto) {
    return await this.courseModel.create(createCourseDto);
  }

  async findAll(search: searchT) {
    let query = {};
    let sort = {};
    if (search.searchFilter) {
      query = {
        $or: [
          { title: { $regex: search.searchFilter, $options: 'i' } },
          { instructor: { $regex: search.searchFilter, $options: 'i' } },
          { category: { $regex: search.searchFilter, $options: 'i' } },
        ],
      };
    }

    if (search.sortBy) {
      sort = { [search.sortBy]: parseInt(search.sort) || -1 };
    }
    return await this.courseModel.find(query).sort(sort).lean();
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: any) {
    return `This action updates a #${id} course ${updateCourseDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}

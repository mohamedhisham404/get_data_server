import { Injectable, NotFoundException } from '@nestjs/common';
import { GetUserDto } from './dto/getUser.dto';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { getUserSorting } from './enums/getUserSorting.enum';
import { getSwaggerComponents } from 'src/swagger';

@Injectable()
export class SocialService {
  constructor(private dataSource: DataSource) {}

  async find(getUserDto: GetUserDto, page: number, limit: number) {
    const { userName, age, sorting, sortingBy } = getUserDto;
    const safeLimit = Math.max(limit, 1);
    const safePage = Math.max(page, 1);
    const skip = (safePage - 1) * safeLimit;

    const order: Record<string, 'ASC' | 'DESC'> = {};
    if (sorting !== getUserSorting.NONE && sortingBy) {
      order[sortingBy] = sorting as 'ASC' | 'DESC';
    }

    const where: Record<string, any> = {};
    if (userName) where.username = userName;
    if (age) where.age = age;

    const user = await this.dataSource.manager.find(User, {
      where,
      ...(Object.keys(order).length && { order }),
      skip,
      take: safeLimit,
    });

    if (!user || !user.length) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  getSchema() {
    const swaggerDoc = getSwaggerComponents();
    return swaggerDoc?.schemas;
  }
}

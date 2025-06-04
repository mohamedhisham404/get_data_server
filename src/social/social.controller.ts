import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { SocialService } from './social.service';
import { GetUserDto } from './dto/getUser.dto';

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post('user')
  async find(
    @Body() getUserDto: GetUserDto,
    @Query('page', new ParseIntPipe()) page: number,
    @Query('limit', new ParseIntPipe()) limit: number,
  ) {
    return this.socialService.find(getUserDto, page, limit);
  }

  @Get('schema')
  getSchema() {
    return this.socialService.getSchema();
  }
}

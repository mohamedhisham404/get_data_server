import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { getUserSorting } from '../enums/getUserSorting.enum';
import { sortBy } from '../enums/sortBy.enum';

export class GetUserDto {
  @ApiPropertyOptional({
    description: 'Required if age is not provided',
  })
  @ValidateIf((o: GetUserDto) => !o.age)
  @IsString()
  userName?: string;

  @ApiPropertyOptional({
    description: 'Required if userName is not provided',
  })
  @ValidateIf((o: GetUserDto) => !o.userName)
  @IsNumber()
  age?: number;

  @ApiProperty({ enum: getUserSorting })
  @IsEnum(getUserSorting)
  sorting: getUserSorting;

  @ApiPropertyOptional({ enum: sortBy })
  @IsOptional()
  @IsEnum(sortBy)
  sortingBy?: string;
}

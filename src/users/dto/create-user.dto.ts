import { IsBoolean, IsEnum, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  @Length(8)
  password: string;

  @IsBoolean()
  isActive: boolean;

  @IsEnum(['admin', 'user', 'report'])
  role: string;
}

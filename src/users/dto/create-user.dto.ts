import { IsBoolean, IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsBoolean()
  isActive: boolean;

  @IsEnum(['admin', 'user', 'report'])
  role: string;
}

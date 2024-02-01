import { IsBoolean, IsEnum, IsString, Length } from 'class-validator';
import { userConstants } from '../../constants';

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

  @IsEnum([userConstants.user, userConstants.admin, userConstants.report])
  role: string;
}

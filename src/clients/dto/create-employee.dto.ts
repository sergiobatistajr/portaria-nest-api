import { IsString, IsUUID } from 'class-validator';

export class CreateEmployeeDto {
  @IsUUID()
  clientId: string;

  @IsString()
  jobTitle: string;

  @IsString()
  sector: string;
}

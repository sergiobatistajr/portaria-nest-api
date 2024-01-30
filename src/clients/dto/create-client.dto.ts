import { IsEnum, IsString, IsUUID } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsEnum(['guest', 'employee', 'delivery'])
  clientType: string;

  @IsUUID()
  createdBy: string;

  @IsString()
  jobTitle?: string;

  @IsString()
  sector?: string;

  @IsString()
  company?: string;
}

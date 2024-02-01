import { IsEnum, IsString, IsUUID, Matches, ValidateIf } from 'class-validator';
import {
  CLIENT_DELIVERY,
  CLIENT_EMPLOYEE,
  CLIENT_GUEST,
} from '../clients.constants';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  @Matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/, {
    message: 'CPF inválido',
  })
  cpf: string;

  @IsEnum([CLIENT_DELIVERY, CLIENT_GUEST, CLIENT_EMPLOYEE])
  clientType: string;

  @IsUUID()
  createdBy: string;

  @IsString()
  jobTitle?: string;

  @ValidateIf((client) => client.sector !== undefined && client.sector !== null)
  @IsString()
  sector?: string;

  @ValidateIf(
    (client) => client.company !== undefined && client.company !== null,
  )
  @IsString()
  company?: string;
}

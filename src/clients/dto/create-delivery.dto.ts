import { IsString, IsUUID } from 'class-validator';

export class CreateDeliveryDto {
  @IsUUID()
  clientId: string;

  @IsString()
  company: string;
}

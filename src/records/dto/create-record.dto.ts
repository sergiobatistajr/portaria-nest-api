import { IsDateString, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateRecordDto {
  @IsDateString()
  entryDate: string;

  @IsUUID()
  clientId: string;

  @IsUUID()
  vehicleId: string;

  @IsUUID()
  createdBy: string;

  @IsDateString()
  exitDate?: string;

  @IsNumber()
  apartment?: number;

  @IsString()
  event?: string;

  @IsString()
  location?: string;

  @IsString()
  observations?: string;
}

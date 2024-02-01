import {
  IsDateString,
  IsNumber,
  IsString,
  IsUUID,
  ValidateIf,
} from 'class-validator';

export class CreateRecordDto {
  @IsDateString()
  entryDate: string;

  @IsUUID()
  clientId: string;

  @ValidateIf(
    (record) => record.vehicleId !== undefined && record.vehicleId !== null,
  )
  @IsUUID()
  vehicleId?: string;

  @IsUUID()
  createdBy: string;

  @ValidateIf(
    (record) => record.apartment !== undefined && record.apartment !== null,
  )
  @IsNumber()
  apartment?: number;

  @ValidateIf((record) => record.event !== undefined && record.event !== null)
  @IsString()
  event?: string;

  @ValidateIf(
    (record) => record.location !== undefined && record.location !== null,
  )
  @IsString()
  location?: string;

  @ValidateIf(
    (record) =>
      record.observations !== undefined && record.observations !== null,
  )
  @IsString()
  observations?: string;
}

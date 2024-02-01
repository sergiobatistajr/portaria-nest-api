import { IsString, Matches } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  @Matches(/^[A-Z]{3}[0-9][A-Z][0-9]{2}|[0][0-1][1-9]$/)
  plate: string;

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  color: string;
}

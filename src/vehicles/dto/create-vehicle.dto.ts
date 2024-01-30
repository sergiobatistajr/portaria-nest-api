import { IsString } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  plate: string;

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  color: string;
}

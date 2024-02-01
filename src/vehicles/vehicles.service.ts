import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, QueryFailedError, Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle) private vehiclesRepository: Repository<Vehicle>,
  ) {}
  async create(createVehicleDto: CreateVehicleDto) {
    try {
      return await this.vehiclesRepository.save(createVehicleDto);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        return {
          message: ['Vehicle already exists'],
          statusCode: HttpStatus.CONFLICT,
          error: error.message,
        };
      }
      throw error;
    }
  }

  async findByPlate(plate: string) {
    return await this.vehiclesRepository.findBy({
      plate: ILike(`%${plate}%`),
    });
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return await this.vehiclesRepository.update(id, updateVehicleDto);
  }
}

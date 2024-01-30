import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle) private vehiclesRepository: Repository<Vehicle>,
  ) {}
  async create(createVehicleDto: CreateVehicleDto) {
    return await this.vehiclesRepository.save(createVehicleDto);
  }

  async findOne(plate: string) {
    return await this.vehiclesRepository.findOneOrFail({ where: { plate } });
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return await this.vehiclesRepository.update(id, updateVehicleDto);
  }
}

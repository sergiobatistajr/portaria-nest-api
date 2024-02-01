import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get(':plate')
  getByPlate(@Param() plate: string) {
    return this.vehiclesService.findByPlate(plate);
  }

  @Patch(':id')
  update(@Param() id: string, @Body() vehicleUpdateDto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, vehicleUpdateDto);
  }
}

import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Employee } from './entities/employee.entity';
import { Delivery } from './entities/delivery.entity';
import { ClientsController } from './clients.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Employee, Delivery])],
  providers: [ClientsService],
  exports: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}

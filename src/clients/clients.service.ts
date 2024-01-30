import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Delivery } from './entities/delivery.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { CLIENT_DELIVERY, CLIENT_EMPLOYEE } from './clients.constant';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientsRepository: Repository<Client>,
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
    @InjectRepository(Delivery)
    private deliveriesRepository: Repository<Delivery>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const client = await this.clientsRepository.save(createClientDto);
    if (client.clientType === CLIENT_EMPLOYEE) {
      const employee = await this.createEmployee({
        clientId: client.id,
        jobTitle: createClientDto?.jobTitle,
        sector: createClientDto?.sector,
      });
      return {
        ...client,
        ...employee,
      };
    }
    if (client.clientType === CLIENT_DELIVERY) {
      const delivery = await this.createDelivery({
        clientId: client.id,
        company: createClientDto?.company,
      });
      return {
        ...client,
        ...delivery,
      };
    }

    return client;
  }

  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    return this.employeesRepository.save(createEmployeeDto);
  }

  async createDelivery(delivery: { clientId: string; company: string }) {
    return this.deliveriesRepository.save(delivery);
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(name: string) {
    return `This action returns a #${name} client`;
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }
}

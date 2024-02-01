import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ILike, QueryFailedError, Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Delivery } from './entities/delivery.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { clientConstants } from 'src/constants';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientsRepository: Repository<Client>,
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
    @InjectRepository(Delivery)
    private deliveriesRepository: Repository<Delivery>,
  ) {}
  // chamar o metodo pela key
  async create(createClientDto: CreateClientDto) {
    try {
      const client = await this.clientsRepository.save(createClientDto);
      if (client.clientType === clientConstants.employee) {
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

      if (client.clientType === clientConstants.delivery) {
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
    } catch (error) {
      if (error instanceof QueryFailedError) {
        return {
          message: ['Client already exists'],
          statusCode: HttpStatus.CONFLICT,
          error: error.message,
        };
      }
      throw error;
    }
  }

  private async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    return this.employeesRepository.save(createEmployeeDto);
  }

  private async createDelivery(delivery: CreateDeliveryDto) {
    return this.deliveriesRepository.save(delivery);
  }

  async findByCpf(cpf: string) {
    return await this.clientsRepository.find({
      where: { cpf: ILike(`%${cpf}%`) },
      relations: {
        employee: true,
        delivery: true,
      },
    });
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return await this.clientsRepository.update(id, updateClientDto);
  }
}

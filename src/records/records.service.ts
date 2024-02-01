import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Record } from './entities/record.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private readonly recordsRepository: Repository<Record>,
  ) {}
  async create(createRecordDto: CreateRecordDto) {
    return await this.recordsRepository.save(createRecordDto);
  }

  async findAll() {
    return await this.recordsRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} record`;
  }

  async update(id: string, updateRecordDto: UpdateRecordDto) {
    return await this.recordsRepository.update(id, updateRecordDto);
  }
}

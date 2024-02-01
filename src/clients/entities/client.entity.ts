import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Delivery } from './delivery.entity';
import { Employee } from './employee.entity';
import { Record } from 'src/records/entities/record.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  createdBy: string;

  @Column({
    type: 'enum',
    enum: ['employee', 'guest', 'delivery'],
  })
  clientType: string;

  @OneToOne(() => Employee, (employee) => employee.client)
  employee: Employee;

  @OneToOne(() => Delivery, (delivery) => delivery.client)
  delivery: Delivery;

  @OneToMany(() => Record, (record) => record.client)
  records: Record[];
}

import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Delivery } from './delivery.entity';
import { Employee } from './employee.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
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
}

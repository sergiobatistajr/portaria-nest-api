import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class Employee {
  @PrimaryColumn()
  clientId: string;

  @OneToOne(() => Client, (client) => client.employee)
  @JoinColumn()
  client: Client;

  @Column()
  jobTitle: string;

  @Column()
  sector: string;
}

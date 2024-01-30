import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class Delivery {
  @PrimaryColumn()
  clientId: string;

  @OneToOne(() => Client, (client) => client.delivery)
  @JoinColumn()
  client: Client;

  @Column()
  company: string;
}

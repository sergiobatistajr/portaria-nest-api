import { Client } from 'src/clients/entities/client.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Record {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  entryDate: Date;

  @Column({ nullable: true })
  apartment?: number;

  @Column({ nullable: true })
  exitDate?: Date;

  @Column({ nullable: true })
  event?: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ nullable: true })
  observation?: string;

  @ManyToOne(() => Client, (client) => client.records)
  client: Client;

  @Column()
  clientId: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.records)
  vehicle: Vehicle;

  @Column({ nullable: true })
  vehicleId: string;
}

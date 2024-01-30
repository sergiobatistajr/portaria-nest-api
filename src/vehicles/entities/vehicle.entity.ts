import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  plate: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  color: string;
}

import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';
import { RecordsModule } from './records/records.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/entities/client.entity';
import { User } from './users/entities/user.entity';
import { Record } from './records/entities/record.entity';

@Module({
  imports: [
    UsersModule,
    ClientsModule,
    RecordsModule,
    VehiclesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'local_user',
      password: 'local_password',
      database: 'local_db',
      // entities: [User, Record, Client],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule { }

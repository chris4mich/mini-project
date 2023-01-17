import { Module } from '@nestjs/common';
import { DepartmentModule } from './department/department.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal : true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      password:process.env.DB_PASS,
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: process.env.DB_USER,
      database: process.env.DB_NAME_DEVELOPMENT,
      autoLoadEntities:true,
      synchronize:true
    }),
    DepartmentModule,
    EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
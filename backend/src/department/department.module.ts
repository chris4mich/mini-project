import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentEntity } from 'src/department/department.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([DepartmentEntity])],
  providers: [DepartmentService],
  controllers: [DepartmentController]
})
export class DepartmentModule {}

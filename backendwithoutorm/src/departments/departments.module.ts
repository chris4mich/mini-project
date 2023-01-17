import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import DepartmentsController from './departments.controller';
import DepartmentsRepository from './departments.repository';

@Module({
  imports: [],
  controllers: [DepartmentsController],
  providers: [
    DepartmentsRepository,
    DepartmentsService
  ],
})
export class DepartmentsModule {}
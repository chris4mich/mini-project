import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteResult,
  FindManyOptions,
  Repository,
  UpdateResult,
} from 'typeorm';

import { EmployeeEntity } from 'src/employee/Employee.entity';
import { from, Observable } from 'rxjs';
import { EmployeeInterface } from './employee.interface';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async createEmployee(
    employeeInterface: EmployeeInterface,
  ): Promise<EmployeeInterface> {
    return await this.employeeRepository.save(employeeInterface);
  }
  
  async findEmployeeById(id: number): Promise<EmployeeInterface> {
    return await this.employeeRepository.findOne({ where: { id } });
  }

  async findAllEmployees(
    options?: FindManyOptions<EmployeeEntity>,
  ): Promise<EmployeeEntity[]> {
    return this.employeeRepository.find(options);
  }

  async deleteEmployee(id: number) {
    return await from(this.employeeRepository.delete(id));
  }

  async updateEmployee(
    id: number,
    employeeInterface: EmployeeInterface,
  ): Promise<UpdateResult> {
    return await this.employeeRepository.update(id, employeeInterface);
  }
}

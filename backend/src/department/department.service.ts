import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { DepartmentEntity } from 'src/department/Department.entity';
import { from, Observable } from 'rxjs';
import { DepartmentInterface } from './department.interface';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(DepartmentEntity)
    private readonly departmentRepository: Repository<DepartmentEntity>,
  ) {}

  async createDepartment(
    departmentInterface: DepartmentInterface,
  ): Promise<DepartmentInterface> {
    return await this.departmentRepository.save(departmentInterface);
  }

  async findDepartmentById(id: number): Promise<DepartmentInterface> {
    return await this.departmentRepository.findOne({ where: {id}});
}

  async findAllDepartments(): Promise<DepartmentInterface[]> {
    return await this.departmentRepository.find();
  }

  async deleteDepartment(id: number) {
    return await from(this.departmentRepository.delete(id));
  }

  async updateDepartment(
    id: number,
    departmentInterface: DepartmentInterface,
  ): Promise<UpdateResult> {
    return await this.departmentRepository.update(id, departmentInterface);
  }
}

import { Injectable } from '@nestjs/common';
import DepartmentsRepository from './departments.repository';
import DepartmentsDto from './departments.dto';
 
@Injectable()
export class DepartmentsService {
  constructor(private readonly departmentsRepository: DepartmentsRepository) {}
 
  getDepartments() {
    return this.departmentsRepository.getAll();
  }
 
  getDepartmentById(id: number) {
    return this.departmentsRepository.getById(id);
  }
 
  createDepartment(postData: DepartmentsDto) {
    return this.departmentsRepository.create(postData);
  }
 
  updateDepartment(id: number, postData: DepartmentsDto) {
    return this.departmentsRepository.update(id, postData);
  }
 
  deleteDepartment(id: number) {
    return this.departmentsRepository.delete(id);
  }
}
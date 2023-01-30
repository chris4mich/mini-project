import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { DepartmentInterface } from './department.interface';
import { DepartmentService } from './department.service';

@ApiTags('Departments')
@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Post()
  async createDepartment(
    @Body() departmentInterface: DepartmentInterface,
  ): Promise<DepartmentInterface> {
    return await this.departmentService.createDepartment(departmentInterface);
  }

  @Get(':id')
  async findDepartmentById(
    @Param('id') id: number,
  ): Promise<DepartmentInterface> {
    return await this.departmentService.findDepartmentById(id);
  }

  @Get()
  async findAllDepartments(): Promise<DepartmentInterface[]> {
    return await this.departmentService.findAllDepartments();
  }

  @Get(':id/employees')
  async getEmployees(@Param('id') id: number) {
    return this.departmentService.getEmployeesByDepartment(id);
  }

  @Delete(':id')
  async deleteDepartment(@Param('id') id: number) {
    return await this.departmentService.deleteDepartment(id);
  }

  @Patch(':id')
  updateDepartment(
    @Param('id') id: number,
    @Body() departmentInterface: DepartmentInterface,
  ): Promise<UpdateResult> {
    return this.departmentService.updateDepartment(id, departmentInterface);
  }
}

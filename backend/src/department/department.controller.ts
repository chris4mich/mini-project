import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { DepartmentInterface } from './department.interface';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Post()
  async createDepartment(
    @Body() blogPost: DepartmentInterface,
  ): Promise<DepartmentInterface> {
    return await this.departmentService.createDepartment(blogPost);
  }

  @Get()
  async findAllDepartments(): Promise<DepartmentInterface[]> {
    return await this.departmentService.findAllDepartments();
  }

  @Delete(':id')
  async deleteDepartment(@Param('id') id: number) {
    return await this.departmentService.deleteDepartment(id);
  }

  @Patch(':id')
  updateDepartment(
    @Param('id') id: number,
    @Body() blogPost: DepartmentInterface,
  ): Promise<UpdateResult> {
    return this.departmentService.updateDepartment(id, blogPost);
  }
}

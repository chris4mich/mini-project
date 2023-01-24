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
import { EmployeeInterface } from './employee.interface';
import { EmployeeService } from './employee.service';

@ApiTags('Employees')
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  async createEmployee(
    @Body() blogPost: EmployeeInterface,
  ): Promise<EmployeeInterface> {
    return await this.employeeService.createEmployee(blogPost);
  }

  @Get()
  async findAllEmployees(): Promise<EmployeeInterface[]> {
    return await this.employeeService.findAllEmployees();
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: number) {
    return await this.employeeService.deleteEmployee(id);
  }

  @Patch(':id')
  updateEmployee(
    @Param('id') id: number,
    @Body() blogPost: EmployeeInterface,
  ): Promise<UpdateResult> {
    return this.employeeService.updateEmployee(id, blogPost);
  }
}

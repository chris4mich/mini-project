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
    @Body() employeeInterface: EmployeeInterface,
  ): Promise<EmployeeInterface> {
    return await this.employeeService.createEmployee(employeeInterface);
  }

  @Get(':id')
  async findEmployeeById(@Param('id') id: number): Promise<EmployeeInterface> {
      return await this.employeeService.findEmployeeById(id);
  }

  @Get()
  async findAllEmployees(): Promise<EmployeeInterface[]> {
    return await this.employeeService.findAllEmployees({
      join: {
        alias: "employee",
        leftJoinAndSelect: {
          department: "employee.department",
        }
      }
    });
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: number) {
    return await this.employeeService.deleteEmployee(id);
  }

  @Patch(':id')
  updateEmployee(
    @Param('id') id: number,
    @Body() employeeInterface: EmployeeInterface,
  ): Promise<UpdateResult> {
    return this.employeeService.updateEmployee(id, employeeInterface);
  }
}

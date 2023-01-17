import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { DepartmentsService } from './departments.service';
  import FindOneParams from '../utils/findOneParams';
  import DepartmentsDto from './departments.dto';
   
  @Controller('departments')
  export default class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) {}
   
    @Get()
    getDepartments() {
      return this.departmentsService.getDepartments();
    }
   
    @Get(':id')
    getPostById(@Param() { id }: FindOneParams) {
      return this.departmentsService.getDepartmentById(id);
    }
   
    @Put(':id')
    updatePost(@Param() { id }: FindOneParams, @Body() departmentData: DepartmentsDto) {
      return this.departmentsService.updateDepartment(id, departmentData);
    }
   
    @Post()
    createPost(@Body() departmentData: DepartmentsDto) {
      return this.departmentsService.createDepartment(departmentData);
    }
   
    @Delete(':id')
    deletePost(@Param() { id }: FindOneParams) {
      return this.departmentsService.deleteDepartment(id);
    }
  }
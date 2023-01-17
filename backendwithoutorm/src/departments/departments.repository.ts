import { Injectable, NotFoundException } from '@nestjs/common';
import DatabaseService from '../database/database.service';
import { plainToInstance } from 'class-transformer';
import DepartmentsModel from './departments.model';
import DepartmentsDto from './departments.dto';

@Injectable()
class DepartmentsRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAll() {
    const databaseResponse = await this.databaseService.runQuery(`
      SELECT * FROM departments
    `);
    return plainToInstance(DepartmentsModel, databaseResponse.rows);
  }

  async getById(id: number) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT * FROM departments WHERE id=$1
    `,
      [id],
    );
    const entity = databaseResponse.rows[0];
    if (!entity) {
      throw new NotFoundException();
    }
    return plainToInstance(DepartmentsModel, entity);
  }

  async create(departmentData: DepartmentsDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      INSERT INTO departments (
        name,
        
      ) VALUES (
        $1
      ) RETURNING *
    `,
      [departmentData.name,],
    );
    return plainToInstance(DepartmentsModel, databaseResponse.rows[0]);
  }

  async update(id: number, departmentData: DepartmentsDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      UPDATE departments
      SET title = $2, department_content = $3
      WHERE id = $1
      RETURNING *
    `,
      [id, departmentData.name],
    );
    const entity = databaseResponse.rows[0];
    if (!entity) {
      throw new NotFoundException();
    }
    return plainToInstance(DepartmentsModel, entity);
  }

  async delete(id: number) {
    const databaseResponse = await this.databaseService.runQuery(
      `DELETE FROM departments WHERE id=$1`,
      [id],
    );
    if (databaseResponse.rowCount === 0) {
      throw new NotFoundException();
    }
  }
}

export default DepartmentsRepository;
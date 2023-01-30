import { DepartmentEntity } from "src/department/Department.entity";

export interface EmployeeInterface {
  id?: number;
  firstname: string;
  lastname: string;
  afm: number;
  dateofbirth: string;
  department: DepartmentEntity;
  createdAt: Date;
}

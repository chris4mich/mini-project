import { EmployeeEntity } from "src/employee/Employee.entity";

export interface DepartmentInterface{
    id: number
    department_name: string
    employees: EmployeeEntity[];
    createdAt: Date
}
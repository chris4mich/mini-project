import { EmployeeEntity } from 'src/employee/Employee.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('departments')
export class DepartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  department_name: string;

  @OneToMany(type => EmployeeEntity, employee => employee.department)
  employees: EmployeeEntity[];

  @CreateDateColumn()
  createdAt: Date;
}

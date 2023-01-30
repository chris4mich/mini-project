import { DepartmentEntity } from 'src/department/Department.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  afm: number;

  @Column()
  dateofbirth: string;

  @ManyToOne(type => DepartmentEntity, department => department.employees)
  department: DepartmentEntity;

  @CreateDateColumn()
  createdAt: Date;
}

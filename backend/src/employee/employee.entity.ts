import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  employee_id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  afm: number;

  @Column()
  dateofbirth: string;

  @CreateDateColumn()
  createdAt: Date;
}

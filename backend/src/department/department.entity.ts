import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('departments')
export class DepartmentEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  department_name: string;

  @CreateDateColumn()
  createdAt: Date;
}

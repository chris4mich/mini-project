import { Expose } from 'class-transformer';

class DepartmentsModel {
  id: number;
  @Expose({ name: 'department_name' })
  name: string;
}
 
export default DepartmentsModel;
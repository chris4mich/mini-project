import { IsString, IsNotEmpty } from 'class-validator';
 
class DepartmentsDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
 
export default DepartmentsDto;
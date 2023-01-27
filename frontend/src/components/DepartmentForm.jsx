import {
  Button,
  FormControl, TextField
} from "@mui/material";
import { useEffect, useState } from "react";


const DepartmentForm = ({ department, onSubmit }) => {
  const [curDepartment, setDepartment] = useState(
    department || {
      department_name: '',
    }
  );

  useEffect(() => {
    if (department) {
      setDepartment(department);
    }
  }, [department]);

  const onUpdateField = e => {
    const nextFormState = {
      ...curDepartment,
      [e.target.name]: e.target.value,
    };
    setDepartment(nextFormState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(curDepartment);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
        <TextField
            style={{ width: 600 }}
            autoComplete="Department Name"
            name="department_name"
            variant="outlined"
            required
            fullWidth
            id="Department Name"
            label="Department Name"
            value={curDepartment.department_name}
            onChange={onUpdateField}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 30 }}
          >
            Add Department
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
export default DepartmentForm;

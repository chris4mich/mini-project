import {
  Button,
  FormControl, MenuItem, Select, TextField
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeForm = ({ employee, onSubmit }) => {
  const [curEmployee, setEmployee] = useState(
    employee || {
      firstname: "",
      lastname: "",
      afm: null,
      dateofbirth: "",
      department: {},
    }
  );

  const [departments, setDepartments] = useState([]);

  const departmentsGet = () => {
    axios.get("http://localhost:4000/department/").then((result) => {
      setDepartments(result.data);
    });
  };

  useEffect(() => {
    if (employee) {
      setEmployee(employee);
    }
    departmentsGet();
  }, [employee]);

  const onUpdateField = (e) => {
    const nextFormState = {
      ...curEmployee,
      [e.target.name]: e.target.value,
    };
    setEmployee(nextFormState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(curEmployee);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            style={{ width: 600 }}
            autoComplete="firstname"
            name="firstname"
            variant="outlined"
            required
            fullWidth
            id="firstname"
            label="First Name"
            value={curEmployee.firstname}
            onChange={onUpdateField}
            autoFocus
          />
          <TextField
            style={{ marginTop: 20, width: 600 }}
            autoComplete="lastname"
            name="lastname"
            variant="outlined"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            value={curEmployee.lastname}
            onChange={onUpdateField}
            autoFocus
          />
          <TextField
            style={{ marginTop: 20, width: 600 }}
            autoComplete="afm"
            name="afm"
            type="number"
            maxlength="9"
            variant="outlined"
            required
            fullWidth
            id="afm"
            label="AFM"
            value={curEmployee.afm}
            onChange={onUpdateField}
            autoFocus
          />
          <TextField
            style={{ marginTop: 20, width: 600 }}
            id="date"
            label="Date of Birthday"
            type="date"
            value={curEmployee.dateofbirth}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onUpdateField}
            name="dateofbirth"
          />
          <Select
            style={{ marginTop: 20, width: 600 }}
            labelId="department name"
            id="department_name"
            placeholder={"departments"}
            label="Department name"
            onChange={onUpdateField}
            name="department"
          >
            {departments.map((department, idx) => (
              <MenuItem key={idx} value={department.id}>
                {department ? department.department_name : ""}
              </MenuItem>
            ))}
          </Select>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 30 }}
          >
            Add Employee
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
export default EmployeeForm;

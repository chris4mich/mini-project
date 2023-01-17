import "./App.css";

// Components
import AddDepartment from "./components/AddDepartment";
import AddEmployee from "./components/AddEmployee";
import AllDepartments from "./components/AllDepartments";
import AllEmployees from "./components/AllEmployees";
import EditDepartment from "./components/EditDepartment";
import EditEmployee from "./components/EditEmployee";
import LoginScreen from "./components/LoginScreen";
import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/employees" element={<AllEmployees />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/adddepartment" element={<AddDepartment />} />
        <Route path="/departments" element={<AllDepartments />} />
        <Route path="/editdepartment" element={<EditDepartment />} />
        <Route path="/editemployee" element={<EditEmployee />} />
      </Routes>
    </div>
  );
}

export default App;

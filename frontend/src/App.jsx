import "./App.css";
import { useState, Fragment } from "react";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <NavBar isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<LoginScreen onLogin={setIsAuthenticated}/>} />
        {isAuthenticated &&
          <Fragment>
            <Route path="/employees" element={<AllEmployees />} />
            <Route path="/employees/add" exact element={<AddEmployee />} />
            <Route path="/employees/:id" element={<EditEmployee />} />
            <Route path="/departments" element={<AllDepartments />} />
            <Route path="/departments/add" exact element={<AddDepartment />} />
            <Route path="/departments/:id" element={<EditDepartment />} />
          </Fragment>
        }
      </Routes>
    </div>
  );
}

export default App;

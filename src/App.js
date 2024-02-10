import Main from "./Landingpage/main";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import Signup from "./Signup/signup"
import Dashboard from "./Dashboard/Dashboard";
import TimeManagement from "./TimeManagement/Dashboard";
import Scheduling from "./TimeManagement/Scheduling";

function App() {
  return (
    <Routes>
      <Route path="/" element={< Main/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/signup" element={< Signup/>} />
      <Route path="/dashboard" element={< Dashboard/>} />
      <Route path="/dashboard/time-management" element={< TimeManagement/>} />
      <Route path="/dashboard/time-management/scheduling" element={< Scheduling/>} />
    </Routes>
  );
}

export default App;

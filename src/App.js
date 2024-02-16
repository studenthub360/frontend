import Main from "./Landingpage/main";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import Signup from "./Signup/signup"
import Dashboard from "./Dashboard/Dashboard";
import TimeManagement from "./TimeManagement/Dashboard";
import Scheduling from "./TimeManagement/Scheduling";
import Tasks from "./TimeManagement/Tasks";
import Tasksdah from "./TimeManagement/taskdash";
import FinanceDashboard from "./FinanceManagement/LandingPage";
import ExpenseTracker from "./FinanceManagement/ExpenseTracker";
import EventDetails from "./TimeManagement/eventDetails"
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/home";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={< Main/>} />
      <Route path="/home" element={< Home/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/signup" element={< Signup/>} />
      <Route path="/dashboard" element={< Dashboard/>} />
      <Route path="/dashboard/time-management" element={< TimeManagement/>} />
      <Route path="/scheduling" element={< Scheduling/>} />
      <Route path="/tasks" element={< Tasks/>} />
      <Route path="/tasksdah" element= {<Tasksdah/>} />
      <Route path="/finance" element={< FinanceDashboard/>} />
      <Route path="/expense-tracker" element={< ExpenseTracker/>} />
      <Route path="/event-details" element={<EventDetails/>} />
    </Routes>
    <Toaster />
    </div>
  );
}

export default App;

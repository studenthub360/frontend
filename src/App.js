import Main from "./Landingpage/main";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import Signup from "./Signup/signup";
import Dashboard from "./Dashboard/Dashboard";
import TimeManagement from "./TimeManagement/Dashboard";
import Scheduling from "./TimeManagement/Scheduling";
import Tasks from "./TimeManagement/Tasks";
import Tasksdah from "./TimeManagement/taskdash";
import FinanceDashboard from "./FinanceManagement/LandingPage";
import ExpenseTracker from "./FinanceManagement/ExpenseTracker";
import Events from "./TimeManagement/eventdash";
import Groups from "./SocialNetworking/Dashboard";
import Nevents from "./SocialNetworking/eventdashboard";
import Stress from "./wellbeing/Dashboard";
import { inject } from '@vercel/analytics';
import Coping from "./wellbeing/copingdash";
import Managestress from "./wellbeing/stressdash";
import Learn from "./AcademicSupport/learndash";
import Study from "./AcademicSupport/studydash";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/time-management" element={<TimeManagement />} />
      <Route path="/scheduling" element={<Scheduling />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasksdah" element={<Tasksdah />} />
      <Route path="/financial" element={<FinanceDashboard />} />
      <Route path="/expense-tracker" element={<ExpenseTracker />} />
      <Route path="/dashboard/time-management/events" element={<Events />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/groups/events" element={<Nevents />} />
      <Route path="/wellbeing" element={<Stress />} />
      <Route path="/coping" element={<Coping />} />
      <Route path="/stress" element={<Managestress />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/study" element={<Study />} />
    </Routes>
    
  );
}
inject();
export default App;

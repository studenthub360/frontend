import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Landingpage/main";
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
import { inject } from "@vercel/analytics";
import Coping from "./wellbeing/copingdash";
import Managestress from "./wellbeing/stressdash";
import Learn from "./AcademicSupport/learndash";
import Study from "./AcademicSupport/studydash";
import { injectSpeedInsights } from "@vercel/speed-insights";
import Profile from "./Profile/profile";
import EventDetails from "./SocialNetworking/EventDetails";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (you may need to adjust this based on your authentication logic)
    const accessToken = sessionStorage.getItem("accessToken");

    // If authenticated, set the state to true
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear session token and set isAuthenticated to false
    sessionStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
      <Route path="/signup" element={<Signup />} />
      {isAuthenticated ? (
        <>
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
          <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
          <Route path="/networking-groups/:id" element={<EventDetails />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

inject();
injectSpeedInsights();
export default App;

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
import launch from "./SocialNetworking/images/launch.png";
import cowrywise from "./SocialNetworking/images/cowrywise.png";
import kudaxerica from "./SocialNetworking/images/kudaxerica.png";
import genzhack from "./SocialNetworking/images/genzHack.png";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "./Fpassword/forgot_password";
import FeedbackPage from "./Feedback/feedback";

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

  // render(() => {
  //   console.log('in render')
  // })

  console.log(`isAuthenticated: ${isAuthenticated}`);
  const handleLogout = () => {
    // Clear session token and set isAuthenticated to false
    sessionStorage.removeItem("accessToken");
    // setIsAuthenticated(false);
  };

 
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/login"
        element={<Login onLogin={() => setIsAuthenticated(true)} />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/time-management"
        element={
          <ProtectedRoute>
            <TimeManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/scheduling"
        element={
          <ProtectedRoute>
            <Scheduling />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tasksdah"
        element={
          <ProtectedRoute>
            <Tasksdah />
          </ProtectedRoute>
        }
      />
      <Route
        path="/financial"
        element={
          <ProtectedRoute>
            <FinanceDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/expense-tracker"
        element={
          <ProtectedRoute>
            <ExpenseTracker />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/time-management/events"
        element={
          <ProtectedRoute>
            <Events />
          </ProtectedRoute>
        }
      />
      <Route
        path="/groups"
        element={
          <ProtectedRoute>
            <Groups />
          </ProtectedRoute>
        }
      />
      <Route
        path="/groups/events"
        element={
          <ProtectedRoute>
            <Nevents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wellbeing"
        element={
          <ProtectedRoute>
            <Stress />
          </ProtectedRoute>
        }
      />
      <Route
        path="/coping"
        element={
          <ProtectedRoute>
            <Coping />
          </ProtectedRoute>
        }
      />
      <Route
        path="/stress"
        element={
          <ProtectedRoute>
            <Managestress />
          </ProtectedRoute>
        }
      />
      <Route
        path="/learn"
        element={
          <ProtectedRoute>
            <Learn />
          </ProtectedRoute>
        }
      />
      <Route
        path="/study"
        element={
          <ProtectedRoute>
            <Study />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/networking-groups/:id"
        element={
          <ProtectedRoute>
            <EventDetails  />
          </ProtectedRoute>
        }
      />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/feedback" element={<ProtectedRoute><FeedbackPage /></ProtectedRoute>} />
    </Routes>
  );
}

inject();
injectSpeedInsights();
export default App;

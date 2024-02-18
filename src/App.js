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
import { injectSpeedInsights } from '@vercel/speed-insights';
import Profile from "./Profile/profile";
import EventDetails from "./SocialNetworking/EventDetails";
import launch from "./SocialNetworking/images/launch.png";
import cowrywise from "./SocialNetworking/images/cowrywise.png";
import kudaxerica from "./SocialNetworking/images/kudaxerica.png";
import genzhack from "./SocialNetworking/images/genzHack.png";

function App() {
  const networkingGroups = [
    {
      id: 1,
      name: "GENZ-TECHIES",
      description:
        "Connect with young-minded tech enthusiasts and explore the latest trends in the tech industry. Join us for insightful discussions, networking, and opportunities to collaborate on exciting projects.",
      image: launch,
      eventName: "Tech Enthusiast Meetup",
      date: "2024-04-15",
      time: "14:00",
      contactEmail: "genztechies@example.com",
    },
    {
      id: 2,
      name: "Google Developer Student Club (GDSC)",
      description:
        "Passionate about data science? Join GDSC for our Data Science Workshop where you'll dive into the world of data analytics, machine learning, and more. Network with fellow data enthusiasts!",
      image: cowrywise,
      eventName: "Data Science Workshop",
      date: "2024-04-20",
      time: "15:30",
      contactEmail: "gdsc@example.com",
    },
    {
      id: 3,
      name: "Kuda Tech Club",
      description:
        "Kuda Tech Club invites tech enthusiasts to a symposium on tech innovation. Join us for inspiring talks, hands-on workshops, and a chance to connect with professionals in the field.",
      image: kudaxerica,
      eventName: "Tech Innovation Symposium",
      date: "2024-04-18",
      time: "12:00",
      contactEmail: "kuda.tech@example.com",
    },
    {
      id: 4,
      name: "Trakka Tech Club",
      description:
        "Embark on a coding adventure at the Hackathon 2024 hosted by Trakka Tech Club. Bring your coding skills to the table, collaborate with like-minded individuals, and tackle real-world challenges.",
      image: genzhack,
      eventName: "Hackathon 2024",
      date: "2024-04-25",
      time: "10:00",
      contactEmail: "trakka.tech@example.com",
    },
    {
      id: 5,
      name: "Interswitch Tech Club",
      description:
        "Join us for the Fintech Forum hosted by Interswitch Tech Club. Explore the latest trends in financial technology, engage in panel discussions, and network with professionals in the fintech industry.",
      image: launch,
      eventName: "Fintech Forum",
      date: "2024-04-22",
      time: "13:45",
      contactEmail: "interswitch.tech@example.com",
    },
    {
      id: 6,
      name: "Learnly Tech Club",
      description:
        "Ready to level up your coding skills? Learnly Tech Club presents a Coding Bootcamp where you'll enhance your programming abilities, work on projects, and connect with coding enthusiasts.",
      image: cowrywise,
      eventName: "Coding Bootcamp",
      date: "2024-04-17",
      time: "11:30",
      contactEmail: "learnly.tech@example.com",
    },
    {
      id: 7,
      name: "Fintech Club",
      description:
        "Explore the world of blockchain at the Fintech Club's Blockchain Workshop. Dive into decentralized finance, smart contracts, and blockchain applications. Connect with fellow fintech enthusiasts!",
      image: kudaxerica,
      eventName: "Blockchain Workshop",
      date: "2024-04-19",
      time: "14:15",
      contactEmail: "fintech.club@example.com",
    },
    {
      id: 8,
      name: "Techin (Tech Innovators Network)",
      description:
        "Join the Tech Innovators Network for an Innovation Summit. Engage in discussions on the latest tech innovations, attend keynote sessions, and connect with visionaries shaping the future of technology.",
      image: genzhack,
      eventName: "Innovation Summit",
      date: "2024-04-30",
      time: "09:30",
      contactEmail: "techin@example.com",
    },
    // Add more networking groups as needed
  ];
  
  
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
      <Route path="/profile" element={<Profile />} />
      <Route path="/networking-groups/:id" element={<EventDetails networkingGroups={networkingGroups} />} />
    </Routes>
    
  );
}
inject();
injectSpeedInsights();
export default App;

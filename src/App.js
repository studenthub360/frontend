import Main from "./Landingpage/main";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import Signup from "./Signup/signup"

function App() {
  return (
    <Routes>
      <Route path="/" element={< Main/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/signup" element={< Signup/>} />
    </Routes>
  );
}

export default App;

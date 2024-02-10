import Main from "./Landingpage/main";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={< Main/>} />
      <Route path="/login" element={< Login/>} />
    </Routes>
  );
}

export default App;

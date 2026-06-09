import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import Login from "./Pages/Login.jsx";
import Applications from "./Pages/Applications.jsx";
import Students from "./Pages/Students.jsx";
import Classes from "./Pages/Classes.jsx";
import WebManagement from "./Pages/WebManagement.jsx";
import Teachers from "./Pages/Teachers.jsx";
import Logs from "./Pages/Logs.jsx";
import Submissions from "./Pages/Submissions.jsx";

function App() {
  return (
    <>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Applications" element={<Applications />} />
          <Route path="Submissions" element={<Submissions />} />
          <Route path="Logs" element={<Logs />} />
          <Route path="Students" element={<Students />} />
          <Route path="Classes" element={<Classes />} />
          <Route path="Teachers" element={<Teachers />} />
          <Route path="WebManagement" element={<WebManagement />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

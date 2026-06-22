import { Routes, Route } from "react-router-dom";
import Dashboard from "./Admin/Dashboard.jsx";
import Login from "./Login.jsx";
import Applications from "./Admin/Applications.jsx";
import Students from "./Admin/Students.jsx";
import Classes from "./Admin/Classes.jsx";
import WebManagement from "./Admin/WebManagement.jsx";
import Teachers from "./Admin/Teachers.jsx";
import Logs from "./Admin/Logs.jsx";
import Submissions from "./Admin/Submissions.jsx";

function App() {
  return (
    <>
      <div className="flex">
        {/* admin routes */}
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

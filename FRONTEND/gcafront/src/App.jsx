import { Routes, Route } from "react-router-dom";
import Dashboard from "./Admin/Pages/Dashboard.jsx";
import Login from "./Login.jsx";
import Applications from "./Admin/Pages/Applications.jsx";
import Students from "./Admin/Pages/Students.jsx";
import Classes from "./Admin/Pages/Classes.jsx";
import WebManagement from "./Admin/Pages/WebManagement.jsx";
import Teachers from "./Admin/Pages/Teachers.jsx";
import Logs from "./Admin/Pages/Logs.jsx";
import Submissions from "./Admin/Pages/Submissions.jsx";

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

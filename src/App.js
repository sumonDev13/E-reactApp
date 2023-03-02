import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="dashboard-content">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/ratings" element={<Dashboard />} />
            <Route path="/bar" element={<Dashboard />} />
            <Route path="/reports" element={<Dashboard />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/Login";
import DashboardClass from "./pages/DashboardPage/Dashboard";
import StatusPayment from "./pages/DashboardPage/StatusPayment";
import ManageCourse from "./pages/ManageData/ManageCourse";
import ManageModules from "./pages/ManageData/ManageModules";
import ManageCategory from "./pages/ManageData/ManageCategory";
import ManageLevel from "./pages/ManageData/ManageLevel";
import ManagePromo from "./pages/ManageData/ManagePromo";
import ManageType from "./pages/ManageData/ManageType";
import ManageContent from "./pages/ManageData/ManageContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardClass />} />
        <Route path="/data-payment" element={<StatusPayment />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/manage-course" element={<ManageCourse />} />
        <Route path="/manage-modules/:courseId" element={<ManageModules />} />
        <Route path="/manage-category" element={<ManageCategory />} />
        <Route path="/manage-level" element={<ManageLevel />} />
        <Route path="/manage-promo" element={<ManagePromo />} />
        <Route path="/manage-type" element={<ManageType />} />
        <Route
          path="/manage-content/:courseId/modules/:modulesId"
          element={<ManageContent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

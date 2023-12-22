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
import ManageInstructor from "./pages/ManageData/ManageInstructor";
import Protected from "./components/Midlleware/Protecd";
import ProtecdToken from "./components/Midlleware/NoAccessToken";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <DashboardClass />
            </Protected>
          }
        />

        <Route
          path="/data-payment"
          element={
            <Protected>
              <StatusPayment />
            </Protected>
          }
        />
        <Route
          path="/login"
          element={
            <ProtecdToken>
              <LoginPage />
            </ProtecdToken>
          }
        />
        <Route
          path="/manage-course"
          element={
            <Protected>
              <ManageCourse />
            </Protected>
          }
        />
        <Route
          path="/manage-modules/:courseId"
          element={
            <Protected>
              <ManageModules />
            </Protected>
          }
        />
        <Route
          path="/manage-category"
          element={
            <Protected>
              <ManageCategory />
            </Protected>
          }
        />
        <Route
          path="/manage-level"
          element={
            <Protected>
              <ManageLevel />
            </Protected>
          }
        />
        <Route
          path="/manage-promo"
          element={
            <Protected>
              <ManagePromo />
            </Protected>
          }
        />
        <Route
          path="/manage-type"
          element={
            <Protected>
              <ManageType />
            </Protected>
          }
        />
        <Route
          path="/manage-instructor"
          element={
            <Protected>
              <ManageInstructor />
            </Protected>
          }
        />
        <Route
          path="/manage-content/:courseId/modules/:modulesId"
          element={
            <Protected>
              <ManageContent />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

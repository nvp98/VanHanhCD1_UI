import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import layout và pages
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import RequireAuth from "./RequireAuth";
import LoginPage from "../pages/Login/LoginPage";
import BM_LoVeVien from "../pages/BM_LoVeVien/BM_LoVeVien";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Route - Bọc cả MainLayout */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <MainLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="Lovevien" element={<BM_LoVeVien />} />
        </Route>

        {/* Redirect và fallback */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import layout và pages
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import RequireAuth from "./RequireAuth";
import LoginPage from "../pages/Login/LoginPage";
import BM_LoVeVien from "../pages/BM_LoVeVien/BM_LoVeVien";
import BM_LBDO1VeVien from "../pages/BM_LoVeVien/BM_LBDO1VeVien";
import BM_LBDO2VeVien from "../pages/BM_LoVeVien/BM_LBDO2VeVien";
import BM_QHCVeVien from "../pages/BM_LoVeVien/BM_QHCVeVien";
import BM_LBTDVeVien from "../pages/BM_LoVeVien/BM_LBTDVeVien";
import BM_LBMTPLieuBLuocVeVien from "../pages/BM_LoVeVien/BM_LBMTPLieuBLuocVeVien";
import BM_LBMTMangQuangVeVien from "../pages/BM_LoVeVien/BM_LBMTMangQuangVeVien";
import BM_ThieuKet1 from "../pages/BM_ThieuKet/BM_ThieuKet1";
import BM_ThieuKet2 from "../pages/BM_ThieuKet/BM_ThieuKet2";
import BM_QGC1ThieuKet1 from "../pages/BM_PhuTro/BM_QGC1ThieuKet1";
import BM_QGC2ThieuKet1 from "../pages/BM_PhuTro/BM_QGC2ThieuKet1";
import BM_QGC3ThieuKet2 from "../pages/BM_PhuTro/BM_QGC3ThieuKet2";
import BM_QGC4ThieuKet2 from "../pages/BM_PhuTro/BM_QGC4ThieuKet2";
import BM_NoiHoi1ThieuKet1 from "../pages/BM_PhuTro/BM_NoiHoi1ThieuKet1";
import BM_NoiHoi2ThieuKet2 from "../pages/BM_PhuTro/BM_NoiHoi2ThieuKet2";
import BM_NoiHoiOngKhoiThieuKet1 from "../pages/BM_PhuTro/BM_NoiHoiOngKhoiThieuKet1";
import BM_NoiHoiOngKhoiThieuKet2 from "../pages/BM_PhuTro/BM_NoiHoiOngKhoiThieuKet2";
import BM_TB1ThieuKet1 from "../pages/BM_PhuTro/BM_TB1ThieuKet1";
import BM_TB2ThieuKet1 from "../pages/BM_PhuTro/BM_TB2ThieuKet1";
import BM_TB3ThieuKet2 from "../pages/BM_PhuTro/BM_TB3ThieuKet2";
import BM_TB4ThieuKet2 from "../pages/BM_PhuTro/BM_TB4ThieuKet2";
import BM_LBMTMangQuang from "../pages/BM_ThieuKet/BM_LBMTMangQuang";
import BM_LBMTDuoiMay1 from "../pages/BM_ThieuKet/BM_LBMTDuoiMay1";
import BM_LBMTDuoiMay2 from "../pages/BM_ThieuKet/BM_LBMTDuoiMay2";
import BM_TramNuocTuanHoan from "../pages/BM_PhuTro/BM_TramNuocTuanHoan";
import BM_KhuKhiKhoiThieuKet1 from "../pages/BM_PhuTro/BM_KhuKhiKhoiThieuKet1";
import BM_KhuKhiKhoiThieuKet2 from "../pages/BM_PhuTro/BM_KhuKhiKhoiThieuKet2";
import BM_LoDoLoMit1 from "../pages/BM_VoiXiMang/BM_LoDoLoMit1";
import BM_LoDoLoMit2 from "../pages/BM_VoiXiMang/BM_LoDoLoMit2";
import BM_VoiDung1 from "../pages/BM_VoiXiMang/BM_VoiDung1";
import BM_VoiDung2 from "../pages/BM_VoiXiMang/BM_VoiDung2";
import BM_VoiDung3 from "../pages/BM_VoiXiMang/BM_VoiDung3";
import BM_LoVoiQuay from "../pages/BM_VoiXiMang/BM_LoVoiQuay";

import BM_CDQ1LuyenCoc from "../pages/BM_LuyenCoc/BM_CDQ1LuyenCoc";
import BM_CDQ2LuyenCoc from "../pages/BM_LuyenCoc/BM_CDQ2LuyenCoc";
import BM_CDQ3LuyenCoc from "../pages/BM_LuyenCoc/BM_CDQ3LuyenCoc";
import BM_LBMT1LuyenCoc from "../pages/BM_LuyenCoc/BM_LBMT1LuyenCoc";
import BM_LBMT2LuyenCoc from "../pages/BM_LuyenCoc/BM_LBMT2LuyenCoc";
import BM_QGTH1LuyenCoc from "../pages/BM_LuyenCoc/BM_QGTH1LuyenCoc";
import BM_QGTH2LuyenCoc from "../pages/BM_LuyenCoc/BM_QGTH2LuyenCoc";
import BM_QGTH3LuyenCoc from "../pages/BM_LuyenCoc/BM_QGTH3LuyenCoc";
import BM_MayNghienLuyenCoc from "../pages/BM_LuyenCoc/BM_MayNghienLuyenCoc";
import BM_LBLuyenCoc from "../pages/BM_LuyenCoc/BM_LBLuyenCoc";

import Operate from "../pages/Operate/Operate";
import OperateNguyenLieu from "../pages/Operate/OperateNguyenLieu";
import OperateLuyenCoc from "../pages/Operate/OperateLuyenCoc";

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
          <Route path="LBDO1vevien" element={<BM_LBDO1VeVien />} />
          <Route path="LBDO2vevien" element={<BM_LBDO2VeVien />} />
          <Route path="QHCvevien" element={<BM_QHCVeVien />} />
          <Route path="LBTDvevien" element={<BM_LBTDVeVien />} />
          <Route path="LBMTPLieuBLuocvevien" element={<BM_LBMTPLieuBLuocVeVien />} />
          <Route path="LBMTMangQuangVeVien" element={<BM_LBMTMangQuangVeVien />} />
          <Route path="Thieuket1" element={<BM_ThieuKet1 />} />
          <Route path="Thieuket2" element={<BM_ThieuKet2 />} />
          <Route path="QGC1Thieuket1" element={<BM_QGC1ThieuKet1 />} />
          <Route path="QGC2Thieuket1" element={<BM_QGC2ThieuKet1 />} />
          <Route path="QGC3Thieuket2" element={<BM_QGC3ThieuKet2 />} />
          <Route path="QGC4Thieuket2" element={<BM_QGC4ThieuKet2 />} />
          <Route path="TB1Thieuket1" element={<BM_TB1ThieuKet1 />} />
          <Route path="TB2Thieuket1" element={<BM_TB2ThieuKet1 />} />
          <Route path="TB3Thieuket2" element={<BM_TB3ThieuKet2 />} />
          <Route path="TB4Thieuket2" element={<BM_TB4ThieuKet2 />} />
          <Route path="NoiHoi1Thieuket1" element={<BM_NoiHoi1ThieuKet1 />} />
          <Route path="NoiHoi2Thieuket2" element={<BM_NoiHoi2ThieuKet2 />} />
          <Route path="NoiHoiOngKhoiThieuket1" element={<BM_NoiHoiOngKhoiThieuKet1 />} />
          <Route path="NoiHoiOngKhoiThieuket2" element={<BM_NoiHoiOngKhoiThieuKet2 />} />
          <Route path="LBMTDuoiMay1" element={<BM_LBMTDuoiMay1 />} />
          <Route path="LBMTDuoiMay2" element={<BM_LBMTDuoiMay2 />} />
          <Route path="LBMTMangQuang" element={<BM_LBMTMangQuang />} />
          <Route path="TramNuocTuanHoan" element={<BM_TramNuocTuanHoan />} />
          <Route path="KhuKhiKhoiThieuKet1" element={<BM_KhuKhiKhoiThieuKet1 />} />
          <Route path="KhuKhiKhoiThieuKet2" element={<BM_KhuKhiKhoiThieuKet2 />} />
          <Route path="LoDOLOMIT1" element={<BM_LoDoLoMit1 />} />
          <Route path="LoDOLOMIT2" element={<BM_LoDoLoMit2 />} />
          <Route path="LoVoiDung1" element={<BM_VoiDung1 />} />
          <Route path="LoVoiDung2" element={<BM_VoiDung2 />} />
          <Route path="LoVoiDung3" element={<BM_VoiDung3 />} />
          <Route path="LoVoiQuay" element={<BM_LoVoiQuay />} />
          <Route path="thieuketveviens" element={<Operate />} />
          <Route path="nguyenlieus" element={<OperateNguyenLieu />} />
          <Route path="luyencocs" element={<OperateLuyenCoc />} />
          <Route path="CDQ1LuyenCoc" element={<BM_CDQ1LuyenCoc />} />
          <Route path="CDQ2LuyenCoc" element={<BM_CDQ2LuyenCoc />} />
          <Route path="CDQ3LuyenCoc" element={<BM_CDQ3LuyenCoc />} />
          <Route path="LBMT1LuyenCoc" element={<BM_LBMT1LuyenCoc />} />
          <Route path="LBMT2LuyenCoc" element={<BM_LBMT2LuyenCoc />} />
          <Route path="QGTH1LuyenCoc" element={<BM_QGTH1LuyenCoc />} />
          <Route path="QGTH2LuyenCoc" element={<BM_QGTH2LuyenCoc />} />
          <Route path="QGTH3LuyenCoc" element={<BM_QGTH3LuyenCoc />} />
           <Route path="LBLuyenCoc" element={<BM_LBLuyenCoc />} />
          <Route path="MayNghienLuyenCoc" element={<BM_MayNghienLuyenCoc />} />
        </Route>

        {/* Redirect và fallback */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

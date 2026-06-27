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
import NhietDo from "../pages/NhietDo/NhietDo";
import LBMT_MangQuangVeVien from "../pages/BM_Warning_TKVV/LBMT_MangQuangVeVien"; 
import LBMT_PLieuBLuocVeVien from "../pages/BM_Warning_TKVV/LBMT_PLieuBLuocVeVien";
import LBMT_DuoiMayHaiNhaNghien from "../pages/BM_Warning_TKVV/LBMT_DuoiMay2NhaNghien";
import LBMT_MangQuangThieuKet from "../pages/BM_Warning_TKVV/LBMT_MangQuangThieuKet";
import LBMT_PhoiLieuDuoiMay1 from "../pages/BM_Warning_TKVV/LBMT_PhoiLieuDuoiMay1";
import LBDO1VeVien from "../pages/BM_Warning_TKVV/LBDO1VeVien";
import LBDO2VeVien from "../pages/BM_Warning_TKVV/LBDO2VeVien";
import QHCVeVien from "../pages/BM_Warning_TKVV/QHCVeVien";
import QGC1ThieuKet1 from "../pages/BM_Warning_TKVV/QGC1ThieuKet1";
import QGC2ThieuKet1 from "../pages/BM_Warning_TKVV/QGC2ThieuKet1"; 
import QGC3ThieuKet2 from "../pages/BM_Warning_TKVV/QGC3ThieuKet2"; 
import QGC4ThieuKet2 from "../pages/BM_Warning_TKVV/QGC4ThieuKet2"; 
import DongCoThieuKet1 from "../pages/BM_Warning_TKVV/DongCoThieuKet1"; 
import DongCoThieuKet2 from "../pages/BM_Warning_TKVV/DongCoThieuKet2"; 
import NoiHoiOngKhoiThieuKet1 from "../pages/BM_Warning_TKVV/NoiHoiOngKhoiThieuKet1"; 
import NoiHoiOngKhoiThieuKet2 from "../pages/BM_Warning_TKVV/NoiHoiOngKhoiThieuKet2"; 
import DongCoLamMatVongVeVien from "../pages/BM_Warning_TKVV/DongCoLamMatVongVeVien";
import DongCoLoVoi1 from "../pages/BM_Warning_TKVV/DongCoLoVoi1"; 
import DongCoLoVoi2 from "../pages/BM_Warning_TKVV/DongCoLoVoi2"; 
import DongCoLoVoi3 from "../pages/BM_Warning_TKVV/DongCoLoVoi3"; 
import DongCoDolomit1 from "../pages/BM_Warning_TKVV/DongCoDolomit1"; 
import DongCoDolomit2 from "../pages/BM_Warning_TKVV/DongCoDolomit2"; 
import DongCoLoVoiQuay from "../pages/BM_Warning_TKVV/DongCoLoVoiQuay";
import DongCoThanhPhamVoi from "../pages/BM_Warning_TKVV/DongCoThanhPhamVoi";

import BM_LocBuiC1 from "../pages/BM_BaiLieu/BM_LocBuiC1";
import BM_LocBuiC2 from "../pages/BM_BaiLieu/BM_LocBuiC2";
import BM_LocBuiC3 from "../pages/BM_BaiLieu/BM_LocBuiC3";
import BM_LocBuiC4 from "../pages/BM_BaiLieu/BM_LocBuiC4";
import BM_LocBuiC5 from "../pages/BM_BaiLieu/BM_LocBuiC5";
import DongCoLocBuiC1 from "../pages/BM_BaiLieu/DongCoLocBuiC1";
import DongCoLocBuiC2 from "../pages/BM_BaiLieu/DongCoLocBuiC2";
import DongCoLocBuiC3 from "../pages/BM_BaiLieu/DongCoLocBuiC3";
import DongCoLocBuiC4 from "../pages/BM_BaiLieu/DongCoLocBuiC4";
import DongCoLocBuiC5 from "../pages/BM_BaiLieu/DongCoLocBuiC5";
import DongCoTrungThe from "../pages/BM_BaiLieu/DongCoTrungThe";
import DongCoCheBien from "../pages/BM_BaiLieu/DongCoCheBien";

import DongCoNhaNghienLuyenCoc from "../pages/BM_LuyenCoc/DongCoNhaNghienLuyenCoc";
import DongCoLBMT1LuyenCoc from "../pages/BM_LuyenCoc/DongCoLBMT1LuyenCoc";
import DongCoLBMT2LuyenCoc from "../pages/BM_LuyenCoc/DongCoLBMT2LuyenCoc";
import DongCoQGTH1LuyenCoc from "../pages/BM_LuyenCoc/DongCoQGTH1LuyenCoc";
import DongCoQGTH2LuyenCoc from "../pages/BM_LuyenCoc/DongCoQGTH2LuyenCoc"; 
import DongCoQGTH3LuyenCoc from "../pages/BM_LuyenCoc/DongCoQGTH3LuyenCoc";
import DongCoLocBuiNhaSang2LuyenCoc from "../pages/BM_LuyenCoc/DongCoLocBuiNhaSang2LuyenCoc";

import Mba35NguyenLieu from "../pages/Power/Mba35NguyenLieu";
import Tram35NguyenLieu from "../pages/Power/Tram35NguyenLieu"; 
import Tram10NLOT from "../pages/Power/Tram10NLOT";
import Tram10Sub4  from "../pages/Power/Tram10Sub4";
import Tram10KhiNen from "../pages/Power/Tram10KhiNen";
import Tram10KhoThan from "../pages/Power/Tram10KhoThan";
import Tram10DKTT from "../pages/Power/Tram10DKTT";
import Tram10Sub5 from "../pages/Power/Tram10Sub5";
import TuDien35NguyenLieu from "../pages/Power/TuDien35NguyenLieu";
import TuDienBaiLieuMot from "../pages/Power/TuDienBaiLieu1";
import TuDienBaiLieuHai from "../pages/Power/TuDienBaiLieu2";
import TuDienCauCang from "../pages/Power/TuDienCauCang";
import TuDienCangMoRong from "../pages/Power/TuDienCangMoRong";
import MayCatBaiLieuMot from "../pages/Power/MayCatBaiLieu1";
import MayCatBaiLieuHai from "../pages/Power/MayCatBaiLieu2";
import MayCatCauCang from "../pages/Power/MayCatCauCang";
import MayCatCangMoRong from "../pages/Power/MayCatCangMoRong";
import MayCat35NguyenLieu from "../pages/Power/MayCat35NguyenLieu";
import TuXuatTuyenS95 from "../pages/Power/TuXuatTuyenS95";
import TuDCKhiNen from "../pages/Power/TuDcKhiNen";
import OperateTramDien from "../pages/Operate/OperateTramDien";

import TuDoLuong35kVThieuKetVeVien from "../pages/Power/ThieuKetVeVienTuDoLuong35kV";
import TuDauVao10kVThieuKetVeVien from "../pages/Power/ThieuKetVeVienTuDauVao10kV";
import TuDoLuongVaTuLienLacThieuKetVeVien from "../pages/Power/ThieuKetVeVienTuDoLuongVaTuLienLac";
import TuDauVaoMBA35kVThieuKetVeVien from "../pages/Power/ThieuKetVeVienTuDauVaoMBA35kV";
import TiepDiaMBAThieuKetVeVien from "../pages/Power/ThieuKetVeVienTiepDiaMBA";
import TuDienThieuKet1 from "../pages/Power/ThieuKetVeVienTuDienThieuKet1";
import TuDienThieuKet2 from "../pages/Power/ThieuKetVeVienTuDienThieuKet2";
import TuDienVeVien from "../pages/Power/ThieuKetVeVienTuDienVeVien";
import TuDienKhuS from "../pages/Power/ThieuKetVeVienTuDienKhuS";
import TuDienKhuKhiKhoi from "../pages/Power/ThieuKetVeVienTuDienKhuKhiKho";
import TuDienSub1 from "../pages/Power/ThieuKetVeVienTuDienSub1";
import TuDienDuPhong from "../pages/Power/ThieuKetVeVienTuDienDuPhong";

import TuDauVaoDoLuongDUL from "../pages/Power/DULDauVaoDoLuong";
import TuDauVaoMBADUL from "../pages/Power/DULDauVaoMBA";
import TuDauVao10kVDUL from "../pages/Power/DULDauVao10kV";
import MayCatDUL from "../pages/Power/DULMayCat";
import TuVoiDUL from "../pages/Power/DULVoi";
import TuNMNLDUL from "../pages/Power/DULNMNL";
import TuNghienXi2DUL from "../pages/Power/DULNghienXi2";
import TuDungPhongDUL from "../pages/Power/DULTuDuPhong";
import OperateTramDienTKVV from "../pages/Operate/OperateTramDienThieuKet";

import Operate from "../pages/Operate/Operate";
import EquipmentPage from "../pages/Operate/EquipmentPage";
import OperateNguyenLieu from "../pages/Operate/OperateNguyenLieu";
import EquipmentNguyenLieu from "../pages/Operate/EquipmentNguyenLieu";
import OperateLuyenCoc from "../pages/Operate/OperateLuyenCoc";
import EquipmentLuyenCoc from "../pages/Operate/EquipmentLuyenCoc";

import WarningHistoryPage from "../pages/WarningHistory/WarningHistoryPage";


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
          <Route path="CDQ1LuyenCoc" element={<BM_CDQ1LuyenCoc />} />
          <Route path="CDQ2LuyenCoc" element={<BM_CDQ2LuyenCoc />} />
          <Route path="CDQ3LuyenCoc" element={<BM_CDQ3LuyenCoc />} />
          <Route path="LBMT1LuyenCoc" element={<BM_LBMT1LuyenCoc />} />
          <Route path="LBMT2LuyenCoc" element={<BM_LBMT2LuyenCoc />} />
          <Route path="NhietDo" element={<NhietDo />} />
          <Route path="QGTH1LuyenCoc" element={<BM_QGTH1LuyenCoc />} />
          <Route path="QGTH2LuyenCoc" element={<BM_QGTH2LuyenCoc />} />
          <Route path="QGTH3LuyenCoc" element={<BM_QGTH3LuyenCoc />} />
          <Route path="LBLuyenCoc" element={<BM_LBLuyenCoc />} />
          <Route path="MayNghienLuyenCoc" element={<BM_MayNghienLuyenCoc />} />
          <Route path="BMLocBuiC1" element={<BM_LocBuiC1 />}/>
          <Route path="BMLocBuiC2" element={<BM_LocBuiC2 />}/>
          <Route path="BMLocBuiC3" element={<BM_LocBuiC3 />}/>
          <Route path="BMLocBuiC4" element={<BM_LocBuiC4 />}/>
          <Route path="BMLocBuiC5" element={<BM_LocBuiC5 />}/>
          <Route path="LBMTMangQuangVeVien2" element={<LBMT_MangQuangVeVien />} />
          <Route path="LBMTPLieuBLuocVeVien2" element={<LBMT_PLieuBLuocVeVien />} />
          <Route path="LBMTDuoiMayHai" element={<LBMT_DuoiMayHaiNhaNghien />} />
          <Route path="LBMTMangQuangThieuKet2" element={<LBMT_MangQuangThieuKet />} />
          <Route path="LBMT_PhoiLieuDuoiMay" element={<LBMT_PhoiLieuDuoiMay1 />} />
          <Route path="LBDO1VeVien2" element={<LBDO1VeVien />} />
          <Route path="LBDO2VeVien2" element={<LBDO2VeVien />} />
          <Route path="QHCVeVien2" element={<QHCVeVien />} />
          <Route path="QGC1ThieuKetMot" element={<QGC1ThieuKet1 />} />
          <Route path="QGC2ThieuKetMot" element={<QGC2ThieuKet1 />} />
          <Route path="QGC3ThieuKetHai" element={<QGC3ThieuKet2 />} />
          <Route path="QGC4ThieuKetHai" element={<QGC4ThieuKet2 />} />
          <Route path="DongCoThieuKet1" element={<DongCoThieuKet1 />} />
          <Route path="DongCoThieuKet2" element={<DongCoThieuKet2 />} />
          <Route path="NoiHoiOngKhoiThieuKetMot" element={<NoiHoiOngKhoiThieuKet1 />} />
          <Route path="NoiHoiOngKhoiThieuKetHai" element={<NoiHoiOngKhoiThieuKet2 />} />
          <Route path="DongCoLamMatVongVeVien" element={<DongCoLamMatVongVeVien />} />
          <Route path="DongCoLoVoi1" element={<DongCoLoVoi1 />} />
          <Route path="DongCoLoVoi2" element={<DongCoLoVoi2 />} />
          <Route path="DongCoLoVoi3" element={<DongCoLoVoi3 />} />
          <Route path="DongCoLoVoiQuay" element={<DongCoLoVoiQuay />} />
          <Route path="DongCoThanhPhamVoi" element={<DongCoThanhPhamVoi />} />
          <Route path="DongCoDolomit1" element={<DongCoDolomit1 />} />
          <Route path="DongCoDolomit2" element={<DongCoDolomit2 />}/>
          <Route path="DongCoLocBuiC1" element={<DongCoLocBuiC1 />}/>
          <Route path="DongCoLocBuiC2" element={<DongCoLocBuiC2 />}/>
          <Route path="DongCoLocBuiC3" element={<DongCoLocBuiC3 />}/>
          <Route path="DongCoLocBuiC4" element={<DongCoLocBuiC4 />}/>
          <Route path="DongCoLocBuiC5" element={<DongCoLocBuiC5 />}/>
          <Route path="DongCoTrungThe" element={<DongCoTrungThe />}/>
          <Route path="DongCoCheBien" element={<DongCoCheBien />}/>
          <Route path="DongCoNhaNghienLuyenCoc" element={<DongCoNhaNghienLuyenCoc />}/>
          <Route path="DongCoLBMT1LuyenCoc" element={<DongCoLBMT1LuyenCoc />}/>
          <Route path="DongCoLBMT2LuyenCoc" element={<DongCoLBMT2LuyenCoc />}/>
          <Route path="DongCoQGTH1LuyenCoc" element={<DongCoQGTH1LuyenCoc />}/>
          <Route path="DongCoQGTH2LuyenCoc" element={<DongCoQGTH2LuyenCoc />}/>
          <Route path="DongCoQGTH3LuyenCoc" element={<DongCoQGTH3LuyenCoc />}/>
          <Route path="DongCoLocBuiNhaSang2LuyenCoc" element={<DongCoLocBuiNhaSang2LuyenCoc />}/>

          <Route path="Mba35NguyenLieu" element={<Mba35NguyenLieu/>} />
          <Route path="Tram35NguyenLieu" element={<Tram35NguyenLieu/>} />
          <Route path="Tram10NLOT" element={<Tram10NLOT/>} />
          <Route path="Tram10Sub4" element={<Tram10Sub4/>} />
          <Route path="Tram10KhiNen" element={<Tram10KhiNen/>}/>
          <Route path="Tram10KhoThan" element={<Tram10KhoThan/>}/>
          <Route path="Tram10DKTT" element={<Tram10DKTT/>}/>
          <Route path="Tram10Sub5" element={<Tram10Sub5/>}/>
          <Route path="TuDien35NguyenLieu" element={<TuDien35NguyenLieu/>}/>
          <Route path="TuDienBaiLieuMot" element={<TuDienBaiLieuMot/>}/>
          <Route path="TuDienBaiLieuHai" element={<TuDienBaiLieuHai/>}/>
          <Route path="TuDienCauCang" element={<TuDienCauCang/>}/>
          <Route path="TuDienCangMoRong" element={<TuDienCangMoRong/>}/>
          <Route path="MayCatBaiLieuMot" element={<MayCatBaiLieuMot/>}/>
          <Route path="MayCatBaiLieuHai" element={<MayCatBaiLieuHai/>}/>
          <Route path="MayCatCauCang" element={<MayCatCauCang/>}/>
          <Route path="MayCatCangMoRong" element={<MayCatCangMoRong/>}/>
          <Route path="MayCat35NguyenLieu" element={<MayCat35NguyenLieu/>}/>
          <Route path="TuXuatTuyenS95" element={<TuXuatTuyenS95/>}/>
          <Route path="TuDCKhiNen" element={<TuDCKhiNen/>}/>
          
          <Route path="TuDoLuong35kVThieuKetVeVien" element={<TuDoLuong35kVThieuKetVeVien/>} />
          <Route path="TuDauVao10kVThieuKetVeVien" element={<TuDauVao10kVThieuKetVeVien/>}/>
          <Route path="TuDoLuongVaTuLienLacThieuKetVeVien" element={<TuDoLuongVaTuLienLacThieuKetVeVien/>}/>
          <Route path="TuDauVaoMBA35kVThieuKetVeVien" element={<TuDauVaoMBA35kVThieuKetVeVien/>}/>
          <Route path="TiepDiaMBAThieuKetVeVien" element={<TiepDiaMBAThieuKetVeVien/>}/>
          <Route path="TuDienThieuKet1" element={<TuDienThieuKet1/>}/>
          <Route path="TuDienThieuKet2" element={<TuDienThieuKet2/>}/>
          <Route path="TuDienVeVien" element={<TuDienVeVien/>}/>
          <Route path="TuDienKhuS" element={<TuDienKhuS/>}/>
          <Route path="TuDienKhuKhiKhoi" element={<TuDienKhuKhiKhoi/>}/>
          <Route path="TuDienSub1" element={<TuDienSub1/>}/>
          <Route path="TuDienDuPhong" element={<TuDienDuPhong/>}/>

          <Route path="TuDauVaoDoLuongDUL" element={<TuDauVaoDoLuongDUL/>}/>
          <Route path="TuDauVaoMBADUL" element={<TuDauVaoMBADUL/>}/>
          <Route path="TuDauVao10kVDUL" element={<TuDauVao10kVDUL/>}/>
          <Route path="MayCatDUL" element={<MayCatDUL/>}/>
          <Route path="TuVoiDUL" element={<TuVoiDUL/>}/>
          <Route path="TuNMNLDUL" element={<TuNMNLDUL/>}/>
          <Route path="TuNghienXi2DUL" element={<TuNghienXi2DUL/>}/>
          <Route path="TuDungPhongDUL" element={<TuDungPhongDUL/>}/>

          <Route path="equipment" element={<EquipmentPage />} />
          <Route path="equipmentsluyencoc" element={<EquipmentLuyenCoc />} /> 
          <Route path="thieuketveviens" element={<Operate />} />
          <Route path="nguyenlieus" element={<OperateNguyenLieu />} />
          <Route path="equimentnguyenlieus" element={<EquipmentNguyenLieu />} />
          <Route path="luyencocs" element={<OperateLuyenCoc />} />
          <Route path="tramdiennguyenlieus" element={<OperateTramDien/>}/>
          <Route path="tramdienthieketveviens" element={<OperateTramDienTKVV/>}/>

          <Route path="warning-history" element={<WarningHistoryPage />} />
        </Route>

        {/* Redirect và fallback */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

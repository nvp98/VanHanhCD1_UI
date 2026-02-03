import React from "react";
import ComponentOperate from "./ComponentOperate";

function Operate() {

        return (
                <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >
                        <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                                <span className="block">Biểu mẫu vận hành</span>
                        </h2>
                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">Phân Xưởng Vê Viên</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                                        <ComponentOperate primary title="1. Lò Nung" to="/Lovevien" />
                                        <ComponentOperate primary title="2. Lọc Bụi Đa Ống 1" to="/LBDO1vevien" />
                                        <ComponentOperate primary title="3. Lọc Bụi Đa Ống 2" to="/LBDO2vevien" />
                                        <ComponentOperate primary title="4. Lọc Bụi Tĩnh Điện" to="/LBTDvevien" />
                                        <ComponentOperate primary title="5. Quạt Hút Chính" to="/QHCvevien" />
                                        <ComponentOperate primary title="6. Lọc Bụi Môi Trường Phối Liệu" to="/LBMTPLieuBLuocvevien" />
                                        <ComponentOperate primary title="7. Lọc Bụi Môi Trường Máng Quặng" to="/LBMTMangQuangVeVien" />
                                </div>
                        </div>

                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">Phân Xưởng Thiêu Kết 1</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                        <ComponentOperate title="1. Vận Hành Thiêu Kết 1" to="/Thieuket1" />
                                        <ComponentOperate title="2. Lọc Bụi Môi Trường Đuôi Máy 1" to="/LBMTDuoiMay1"/>
                                </div>
                        </div>

                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">Phân Xưởng Thiêu Kết 2</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                                        <ComponentOperate primary title="1.Vận Hành Thiêu Kết 2" to="/Thieuket2" />
                                        <ComponentOperate primary title="2. Lọc Bụi Môi Trường Đuôi Máy 2" to="/LBMTDuoiMay2"/>
                                </div>
                        </div>

                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">Phân Xưởng Phụ Trợ</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                                        <ComponentOperate title="1. Khử Khí Khói Thiêu Kết 1" to="/KhuKhiKhoiThieuKet1"/>
                                        <ComponentOperate title="2. Khử Khí Khói Thiêu Kết 2" to="/KhuKhiKhoiThieuKet2"/>
                                        <ComponentOperate title="3. Quạt Gió Chính 1 Thiêu Kết 1" to="/QGC1ThieuKet1"/>
                                        <ComponentOperate title="4. Quạt Gió Chính 2 Thiêu Kết 1" to="/QGC2ThieuKet1"/>
                                        <ComponentOperate title="5. Quạt Gió Chính 3 Thiêu Kết 2" to="/QGC3ThieuKet2"/>
                                        <ComponentOperate title="6. Quạt giá Chính 4 Thiêu Kết 2" to="/QGC4ThieuKet2"/>
                                        <ComponentOperate title="7. Turbine 1 Thiêu Kết 1" to="/TB1ThieuKet1"/>
                                        <ComponentOperate title="8. Turbine 2 Thiêu Kết 1" to="/TB2ThieuKet1"/>
                                        <ComponentOperate title="9. Turbine 3 Thiêu Kết 2" to="/TB3ThieuKet2"/>
                                        <ComponentOperate title="10. Turbine 4 Thiêu Kết 2" to="/TB4ThieuKet2"/>
                                        <ComponentOperate title="11. Nồi Hơi 1" to="/NoiHoi1ThieuKet1"/>
                                        <ComponentOperate title="12. Nồi Hơi 2" to="/NoiHoi2ThieuKet2"/>
                                        <ComponentOperate title="13. Nồi Hơi Ống Khói Mát Vòng 1" to="/NoiHoiOngKhoiThieuKet1"/>
                                        <ComponentOperate title="14. Nồi Hơi Ống Khói Mát Vòng 2" to="/NoiHoiOngKhoiThieuKet2"/>
                                        <ComponentOperate title="15. Trạm Nước Tuần Hoàn" to="/TramNuocTuanHoan"/>
                                        <ComponentOperate title="16. Lọc Bụi Môi Trường Máng Quặng" to="/LBMTMangQuang"/>
                                </div>
                        </div>

                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">Phân Xưởng Vôi</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                                        <ComponentOperate primary title="1. Lò Vôi Đứng Số 1" to="/LoVoiDung1" />
                                        <ComponentOperate primary title="2. Lò Vôi Đứng Số 2" to="/LoVoiDung2" />
                                        <ComponentOperate primary title="3. Lò Vôi Đứng Số 3" to="/LoVoiDung3" />
                                        <ComponentOperate primary title="4. Lò Dolomit 1" to="/LoDOLOMIT1" />
                                        <ComponentOperate primary title="5. Lò Dolomit 2" to="/LoDOLOMIT2" />
                                        <ComponentOperate primary title="6. Lò Vôi Quay" to="/LoVoiQuay" />
                                </div>
                        </div>

                </div>
        )
}

export default Operate;
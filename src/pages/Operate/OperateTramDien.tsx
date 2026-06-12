import ComponentEquipment from "./ComponentEquipment";


function OperateTramDien() {

        return (
                <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >
                        <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                                <span className="block">TRẠM ĐIỆN</span>
                        </h2>
                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">MBA</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                        <ComponentEquipment primary title="1. Trạm 35kV" to="/Tram35NguyenLieu" />
                                        <ComponentEquipment primary title="2. Trạm 10kV NLOT" to="/Tram10NLOT" />
                                        <ComponentEquipment primary title="3. Trạm 10kV Sub4" to="/Tram10Sub4" />
                                        <ComponentEquipment primary title="4. Trạm 10kV Khí nén" to="/Tram10KhiNen" />
                                        <ComponentEquipment primary title="5. Trạm 10kV Kho than" to="/Tram10KhoThan" />
                                        <ComponentEquipment primary title="6. Trạm 10kV ĐKTT" to="/Tram10DKTT" />
                                        <ComponentEquipment primary title="7. Trạm 10kV Sub5" to="/Tram10Sub5" />
                                </div>
                        </div>
                         <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">TỦ ĐIỆN</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                        <ComponentEquipment primary title="1. Trạm 35kV" to="/TuDien35NguyenLieu" />
                                        <ComponentEquipment primary title="2. Tủ đầu vào Bãi Liệu 1" to="/TuDienBaiLieuMot" />
                                        <ComponentEquipment primary title="3. Tủ đầu vào Bãi Liệu 2" to="/TuDienBaiLieuHai" />
                                        <ComponentEquipment primary title="4. Tủ đầu vào Cẩu Cảng" to="/TuDienCauCang" />
                                        <ComponentEquipment primary title="5. Tủ đầu vào Cảng Mở Rộng" to="/TuDienCangMoRong" />
                                        <ComponentEquipment primary title="6. Máy cắt liên lạc Bãi Liệu 1" to="/MayCatBaiLieuMot" />
                                        <ComponentEquipment primary title="7. Máy cắt liên lạc Bãi Liệu 2" to="/MayCatBaiLieuHai" />
                                        <ComponentEquipment primary title="8. Máy cắt liên lạc Cẩu Cảng" to="/MayCatCauCang" />
                                        <ComponentEquipment primary title="9. Máy cắt liên lạc Cảng Mở Rộng" to="/MayCatCangMoRong" />
                                        <ComponentEquipment primary title="10. Máy cắt liên lạc trạm 35kV" to="/MayCat35NguyenLieu" />
                                        <ComponentEquipment primary title="11. Tủ xuất tuyến S95" to="/TuXuatTuyenS95" />
                                        <ComponentEquipment primary title="12. Tủ ĐC Khí Nén" to="/TuDCKhiNen" />
                                </div>
                        </div>
                </div>
        )
}

export default OperateTramDien;
import ComponentEquipment from "./ComponentEquipment";


function OperateTramDienTKVV() {

        return (
                <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >
                        <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                                <span className="block">TRẠM ĐIỆN 35KV</span>
                        </h2>
                         <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">THIÊU KẾT VÊ VIÊN</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                        <ComponentEquipment primary title="1. Tủ đo lường đầu vào 35kV" to="/TuDoLuong35kVThieuKetVeVien" />
                                        <ComponentEquipment primary title="2. Tủ đầu vào TC 10kV" to="/TuDauVao10kVThieuKetVeVien" />
                                        <ComponentEquipment primary title="3. Tủ MC liên tạc & Tủ đo lường" to="/TuDoLuongVaTuLienLacThieuKetVeVien" />
                                        <ComponentEquipment primary title="4. Tủ đầu vào MBA 35/10kV" to="/TuDauVaoMBA35kVThieuKetVeVien" />
                                        <ComponentEquipment primary title="5. MBA Tiếp địa" to="/TiepDiaMBAThieuKetVeVien" />
                                        <ComponentEquipment primary title="6. Tủ Điện Thiêu kết 1" to="/TuDienThieuKet1" />
                                        <ComponentEquipment primary title="7. Tủ Điện Thiêu kết 2" to="/TuDienThieuKet2" />
                                        <ComponentEquipment primary title="8. Tủ Điện Vê Viên" to="/TuDienVeVien" />
                                        <ComponentEquipment primary title="9. Tủ Điện Khử S" to="/TuDienKhuS" />
                                        <ComponentEquipment primary title="10. Tủ Điện Khử Khí Khói" to="/TuDienKhuKhiKhoi" />
                                        <ComponentEquipment primary title="11. Tủ Điện SUB1" to="/TuDienSub1" />
                                        <ComponentEquipment primary title="12. Tủ Điện Dự Phòng" to="/TuDienDuPhong" />
                                </div>
                        </div>
                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">DUL</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                        <ComponentEquipment primary title="1. Tủ đo lường đầu vào 35kV & Tủ liên lạc" to="/TuDauVaoDoLuongDUL" />
                                        <ComponentEquipment primary title="2. Tủ đầu vào TC 10kV" to="/TuDauVao10kVDUL" />
                                        <ComponentEquipment primary title="3. Tủ đầu vào MBA 35/10kV" to="/TuDauVaoMBADUL" />
                                        <ComponentEquipment primary title="4. Máy Cắt" to="/MayCatDUL" />
                                        <ComponentEquipment primary title="5. Tủ Điện Vôi" to="/TuVoiDUL" />
                                        <ComponentEquipment primary title="6. Tủ Điện Nhà Máy Nguyên Liệu" to="/TuNMNLDUL" />
                                        <ComponentEquipment primary title="7. Tủ Điện Nghiền Xỉ 2" to="/TuNghienXi2DUL" />
                                        <ComponentEquipment primary title="8. Tủ Điện Dự Phòng" to="/TuDungPhongDUL" />
                                </div>
                        </div>
                </div>
        )
}

export default OperateTramDienTKVV;
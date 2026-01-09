import ComponentEquipment from "./ComponentEquipment";


function EquipmentPage() {

    return (
        <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >
            <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                <span className="block">Thiết bị Thiêu Kết Vê Viên</span>
            </h2>
            <div >
                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                    <span className="block">Lọc Bụi Môi Trường</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <ComponentEquipment primary title="1. Đuôi Máy 2 & Nhà Nghiền" to="/LBMTDuoiMayHai" />
                    <ComponentEquipment primary title="2. Máng Quặng #1 & #2" to="/LBMTMangQuangThieuKet2" />
                    <ComponentEquipment primary title="3. Máng Quặng Thành Phẩm & Trạm Trung Chuyển 2 3" to="/LBMTMangQuangVeVien2" />
                    <ComponentEquipment primary title="4. Phối Liệu Bản & Đuôi Máy 1" to="/LBMT_PhoiLieuDuoiMay" />
                    <ComponentEquipment primary title="5. Phối Liệu Bản Lược Vê Viên" to="/LBMTPLieuBLuocVeVien2" />
                    <ComponentEquipment primary title="6. Lọc Bụi Đa Ống 1" to="/LBDO1VeVien2" />
                    <ComponentEquipment primary title="7. Lọc Bụi Đa Ống 2" to="/LBDO2VeVien2" />
                </div>
            </div>
            <div >
                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                    <span className="block">Quạt Gió</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <ComponentEquipment primary title="1. Quạt Gió 1 Thiêu Kết 1" to="/QGC1ThieuKetMot" />
                    <ComponentEquipment primary title="2. Quạt Gió 2 Thiêu Kết 1" to="/QGC2ThieuKetMot" />
                    <ComponentEquipment primary title="3. Quạt Gió 3 Thiêu Kết 2" to="/QGC3ThieuKetHai" />
                    <ComponentEquipment primary title="4. Quạt Gió 4 Thiêu Kết 2" to="/QGC4ThieuKetHai" />
                    <ComponentEquipment primary title="5. Quạt Hút Chính Vê Viên" to="/QHCVeVien2" />
                    <ComponentEquipment primary title="6. Quạt Gió Làm Mát Vòng #1" to="/NoiHoiOngKhoiThieuKetMot" />
                    <ComponentEquipment primary title="7. Quạt Gió Làm Mát Vòng #2" to="/NoiHoiOngKhoiThieuKetHai" />
                </div>
            </div>
            <div >
                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                    <span className="block">Động Cơ</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <ComponentEquipment primary title="1. Thiêu Kết 1" to="/DongCoThieuKet1" />
                    <ComponentEquipment primary title="2. Thiêu Kết 2" to="/DongCoThieuKet2" />
                    <ComponentEquipment primary title="3. Lò Vôi Đứng 1" to="/DongCoLoVoi1" />
                    <ComponentEquipment primary title="4. Lò Vôi Đứng 2" to="/DongCoLoVoi2" />
                    <ComponentEquipment primary title="5. Lò Vôi Đứng 3" to="/DongCoLoVoi3" />
                    <ComponentEquipment primary title="6. Lò Vôi Quay" to="/DongCoLoVoiQuay" />
                    <ComponentEquipment primary title="7. Lò Dolomit 1" to="/DongCoDolomit1" />
                    <ComponentEquipment primary title="8. Lò Dolomit 2" to="/DongCoDolomit2" />
                </div>
            </div>
        </div>
    )
}

export default EquipmentPage;
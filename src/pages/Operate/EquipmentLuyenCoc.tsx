import ComponentEquipment from "./ComponentEquipment";


function EquipmentLuyenCoc() {

        return (
                <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >
                        <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                                <span className="block">THIẾT BỊ LUYỆN CỐC</span>
                        </h2>
                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">Nhà Máy Luyện Cốc</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                        <ComponentEquipment primary title="1. Lọc Bụi Môi Trường Mặt Đất 1" to="/DongCoLBMT1LuyenCoc" />
                                        <ComponentEquipment primary title="2. Lọc Bụi Môi Trường Mặt Đất 2" to="/DongCoLBMT2LuyenCoc" />
                                        <ComponentEquipment primary title="3. Quạt Tuần Hoàn CDQ1" to="/DongCoQGTH1LuyenCoc" />
                                        <ComponentEquipment primary title="4. Quạt Tuần Hoàn CDQ2" to="/DongCoQGTH2LuyenCoc" />
                                        <ComponentEquipment primary title="5. Quạt Tuần Hoàn CDQ3" to="/DongCoQGTH3LuyenCoc" />
                                        <ComponentEquipment primary title="6. Máy Nghiền" to="/DongCoNhaNghienLuyenCoc" />
                                        <ComponentEquipment primary title="7. Lọc Bụi Nhà Sàng 2" to="/DongCoLocBuiNhaSang2LuyenCoc" />
                                </div>
                        </div>
                </div>
        )
}

export default EquipmentLuyenCoc;
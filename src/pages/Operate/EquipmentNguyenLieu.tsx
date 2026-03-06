// #region Sample data

import ComponentEquipment from "./ComponentEquipment";


function EquipmentNguyenLieu() {

        return (
                <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >
                        <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                                <span className="block">THIẾT BỊ NGUYÊN LIỆU</span>
                        </h2>
                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">CHẾ BIẾN</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                                        <ComponentEquipment primary title="1. Động Cơ Chế Biến" to="/DongCoCheBien" />
                                </div>
                        </div>
                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">BÃI LIỆU - BIẾN TẦN TRUNG THẾ</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                                        <ComponentEquipment primary title="1. Băng tải A401" to="" />
                                        <ComponentEquipment primary title="2. Băng tải A402" to="" />
                                        <ComponentEquipment primary title="3. Băng tải A501" to="" />
                                        <ComponentEquipment primary title="4. Băng tải A502" to="" />
                                        <ComponentEquipment primary title="5. Băng tải 1#" to="" />
                                        <ComponentEquipment primary title="6. Băng tải 4#" to="" />
                                </div>
                        </div>
                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">BÃI LIỆU - ĐỘNG CƠ TRUNG THẾ</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                                        <ComponentEquipment primary title="1. Động cơ băng tải trung thế" to="/DongCoTrungThe" />
                                </div>
                        </div>
                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">HỆ THỐNG PHỤ TRỢ</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                                        <ComponentEquipment primary title="1. Lọc bụi C1" to="/DongCoLocBuiC1" />
                                        <ComponentEquipment primary title="2. Lọc bụi C2" to="/DongCoLocBuiC2" />
                                        <ComponentEquipment primary title="3. Lọc bụi C3" to="/DongCoLocBuiC3" />
                                        <ComponentEquipment primary title="4. Lọc bụi C4" to="/DongCoLocBuiC4" />
                                        <ComponentEquipment primary title="5. Lọc bụi C5" to="/DongCoLocBuiC5" />
                                </div>
                        </div>
                          <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">THIẾT BỊ CHÍNH</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                                        <ComponentEquipment primary title="1. KSC-Máy ĐĐRL Số 1" to="" />
                                        <ComponentEquipment primary title="2. KSC-Máy ĐĐRL Số 2" to="" />
                                        <ComponentEquipment primary title="3. KSC-Máy ĐĐRL Số 3" to="" />
                                        <ComponentEquipment primary title="4. KSC-Máy ĐĐRL Số 4" to="" />
                                        <ComponentEquipment primary title="5. KSC-Máy Cào A" to="" />
                                        <ComponentEquipment primary title="6. KSC-Máy Cào B" to="" />
                                        <ComponentEquipment primary title="7. KSC-Máy Cào C" to="" />
                                        <ComponentEquipment primary title="8. KSC-Máy Cào D" to="" />
                                        <ComponentEquipment primary title="9. K.Trộn-Máy Rải 1" to="" />
                                        <ComponentEquipment primary title="10. K.Trộn-Máy Rút 1" to="" />
                                        <ComponentEquipment primary title="11. K.Trộn-Máy Rải 2" to="" />
                                        <ComponentEquipment primary title="12. K.Trộn-Máy Rút 2" to="" />
                                        <ComponentEquipment primary title="13. K.Than-Máy Rút 1" to="" />
                                        <ComponentEquipment primary title="14. K.Than-Máy Rút 2" to="" />
                                        <ComponentEquipment primary title="15. K.Than-Máy Rút 3" to="" />
                                        <ComponentEquipment primary title="16. K.Than-Máy Rút 4" to="" />
                                        <ComponentEquipment primary title="17. K.Than-Máy Rút 5" to="" />
                                        <ComponentEquipment primary title="18. K.Than-Máy Rút 6" to="" />
                                </div>
                        </div>
                </div>
        )
}

export default EquipmentNguyenLieu;
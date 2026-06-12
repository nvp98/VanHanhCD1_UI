// #region Sample data

import ComponentOperate from "./ComponentOperate";


function OperateNguyenLieu() {

        return (
                <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >
                        <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                                <span className="block">BIỂU MẪU VẬN HÀNH</span>
                        </h2>
                     
                        <div>
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">HỆ THỐNG PHỤ TRỢ</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                        <ComponentOperate primary title="1. Lọc bụi C1" to="/BMLocBuiC1" />
                                        <ComponentOperate primary title="2. Lọc bụi C2" to="/BMLocBuiC2" />
                                        <ComponentOperate primary title="3. Lọc bụi C3" to="/BMLocBuiC3" />
                                        <ComponentOperate primary title="4. Lọc bụi C4" to="/BMLocBuiC4" />
                                        <ComponentOperate primary title="5. Lọc bụi C5" to="/BMLocBuiC5" />
                                </div>
                        </div>
                </div>
        )
}

export default OperateNguyenLieu;
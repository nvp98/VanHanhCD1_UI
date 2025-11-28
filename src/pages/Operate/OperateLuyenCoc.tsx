import ComponentOperate from "./ComponentOperate";

function OperateLuyenCoc() {

        return (
                <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >
                        <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                                <span className="block">Biểu mẫu vận hành</span>
                        </h2>
                        <div >
                                <h2 className="text-sm font-extrabold text-skin-inverted sm:text-sm">
                                        <span className="block">Nhà Máy Luyện Cốc</span>
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                                        <ComponentOperate primary title="1. CDQ1" to="/CDQ1LuyenCoc" />
                                        <ComponentOperate primary title="2. CDQ2" to="/CDQ2LuyenCoc" />
                                        <ComponentOperate primary title="3. CDQ3" to="/CDQ3LuyenCoc" />
                                        <ComponentOperate primary title="4. Lọc Bụi Môi Trường Mặt Đất 1" to="/LBMT1LuyenCoc" />
                                        <ComponentOperate primary title="5. Lọc Bụi Môi Trường Mặt Đất 2" to="/LBMT2LuyenCoc" />
                                        <ComponentOperate primary title="6. Quạt Tuần Hoàn CDQ1" to="/QGTH1LuyenCoc" />
                                        <ComponentOperate primary title="7. Quạt Tuần Hoàn CDQ2" to="/QGTH2LuyenCoc" />
                                        <ComponentOperate primary title="8. Quạt Tuần Hoàn CDQ3" to="/QGTH3LuyenCoc" />
                                        <ComponentOperate primary title="9. Máy Nghiền" to="/MayNghienLuyenCoc" />
                                        <ComponentOperate primary title="10. Lọc Bụi Nhà Sàng 2" to="/LBLuyenCoc" />
                                </div>
                        </div>
                </div>
        )
}

export default OperateLuyenCoc;
import React from "react";
import ComponentPowerCard from "./ComponentPower";


const Mba35NguyenLieu: React.FC = () => {


    return (
        <div className="theme-swiss sm:m-6 sm:ml-10 space-y-2 h-full  pt-4 pb-20 bg-white " >
            <div className="flex flex-row justify-between h-10 px-10">
                <div>
                    <span className="text-lg font-sans">Tình trạng</span>
                </div>
                <div className="flex flex-row basis-1/3 bg-red-50">
                    <div className="flex items-center justify-center basis-1/3 bg-red-500">
                        <span className="text-white">
                            Vượt Ngưỡng
                        </span>
                    </div>
                    <div className="flex items-center justify-center basis-1/3 bg-yellow-500">
                        <span className="text-white">
                            Chuẩn bị vượt
                        </span>
                    </div>
                    <div className="flex items-center justify-center basis-1/3 bg-green-500">
                        <span className="text-white">
                            Trong ngưỡng
                        </span>
                    </div>

                </div>
            </div>

            <div className="bg-blue-500 h-10 px flex items-center px-6">
                <span className="text-white">
                    NMNL.Trạm 35Kv
                </span>
            </div>

            <div className="flex flex-row items-center px-6 ">
                <div className="bg-blue-300 py-2 px-4 mr-2 rounded-sm">
                    <span className="text-white">
                        1
                    </span>
                </div>
                <span className="text-sticky">
                    MBA T1
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-6">
                <ComponentPowerCard name="Điện áp pha A" value="1000" />
                <ComponentPowerCard name="Điện áp pha B" value="1000" />
                <ComponentPowerCard name="Điện áp pha C" value="1000" />
                <ComponentPowerCard name="Dòng điện pha A" value="1000" />
                <ComponentPowerCard name="Dòng điện pha B" value="1000" />
                <ComponentPowerCard name="Dòng điện pha C" value="1000" />
                <ComponentPowerCard name="Công suất tác dụng" value="1000" />
                <ComponentPowerCard name="Công suất phản kháng" value="1000" />
                <ComponentPowerCard name="Điện năng tác dụng" value="1000" />
                <ComponentPowerCard name="Tủ Đo Điện áp pha A" value="1000" />
                <ComponentPowerCard name="Tủ Đo Điện áp pha B" value="1000" />
                <ComponentPowerCard name="Tủ Đo Điện áp pha C" value="1000" />
                <ComponentPowerCard name="Tủ Đo Tần số" value="1000" />
                <ComponentPowerCard name="Nhiệt độ dầu 1" value="90" />
                <ComponentPowerCard name="Nhiệt độ dầu 2" value="10" />
                <ComponentPowerCard name="Nhiệt độ cuộn dây" value="10" />
                <ComponentPowerCard name="Tần số" value="90" />
                <ComponentPowerCard name="Cosphi" value="10" />
            </div>
            <div className="flex flex-row items-center px-6 ">
                <div className="bg-blue-300 py-2 px-4 mr-2 rounded-sm">
                    <span className="text-white">
                        2
                    </span>
                </div>
                <span className="text-sticky mr-2">
                    MBA T2 
                </span>
                <span className="text-sticky">
                    01/06/2026 22:20
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-6">
                <ComponentPowerCard name="Điện áp pha A" value="1000" />
                <ComponentPowerCard name="Điện áp pha B" value="1000" />
                <ComponentPowerCard name="Điện áp pha C" value="1000" />
                <ComponentPowerCard name="Dòng điện pha A" value="1000" />
                <ComponentPowerCard name="Dòng điện pha B" value="1000" />
                <ComponentPowerCard name="Dòng điện pha C" value="1000" />
                <ComponentPowerCard name="Công suất tác dụng" value="1000" />
                <ComponentPowerCard name="Công suất phản kháng" value="1000" />
                <ComponentPowerCard name="Điện năng tác dụng" value="1000" />
                <ComponentPowerCard name="Tủ Đo Điện áp pha A" value="1000" />
                <ComponentPowerCard name="Tủ Đo Điện áp pha B" value="1000" />
                <ComponentPowerCard name="Tủ Đo Điện áp pha C" value="1000" />
                <ComponentPowerCard name="Tủ Đo Tần số" value="1000" />
                <ComponentPowerCard name="Nhiệt độ dầu 1" value="90" />
                <ComponentPowerCard name="Nhiệt độ dầu 2" value="10" />
                <ComponentPowerCard name="Nhiệt độ cuộn dây" value="10" />
                <ComponentPowerCard name="Tần số" value="90" />
                <ComponentPowerCard name="Cosphi" value="10" />
            </div>
        </div>
    );

}

export default Mba35NguyenLieu;
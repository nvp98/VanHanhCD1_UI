import React, { useEffect, useRef, useState } from "react";
import type { WarningHistoryConfig } from "../../config/WarningHistoryConfig";


const WarningHistoryPage: React.FC = () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [warningHistory, setWarningHistory] = useState<WarningHistoryConfig[]>([]);

    useEffect(() => {
        fetch(`${baseUrl}/api/WarningHistory/warning`)
            .then(res => res.json())
            .then(data => {
                setWarningHistory(data);
            })
            .catch(error => {
                console.error("Lỗi khi gọi API:", error);
            })
    }, [])

    return (
        <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >
            <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                <span className="block">Lịch Sử Cảnh Báo</span>
            </h2>
            <div className="relative overflow-x-auto bg-grey-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-[#05428c] border-b rounded-base border-default">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-bold text-[#ffffff]">
                                STT
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-[#ffffff]">
                                Ngày
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-[#ffffff]">
                                Giờ
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-[#ffffff]">
                                Khu Vực
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-[#ffffff]">
                                Tên Thông Số
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-[#ffffff]">
                                Đơn vị
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-[#ffffff]">
                                Giá trị
                            </th>
                            <th scope="col" className="px-6 py-3 font-bold text-[#ffffff]">
                                Trạng Thái
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            warningHistory.length > 0 ? (
                                warningHistory.map((item, index) => {
                                    const date = new Date(item.thoiGian);
                                    const ngay = date.toLocaleDateString("vi-VN");
                                    const gio = date.toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' });
                                    return (
                                        <tr key={index} className="bg-neutral-primary border-b border-default">
                                            <td className="text-sm font-medium px-6 py-4">
                                                {index + 1}
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                {ngay}
                                            </th>
                                            <td className="text-sm font-medium px-6 py-4">
                                                {gio}
                                            </td>
                                            <td className="text-sm font-medium px-6 py-4">
                                                {item.khuVuc}
                                            </td>
                                            <td className="text-sm font-medium px-6 py-4">
                                                {item.tenThongSo}
                                            </td>
                                            <td className="text-sm font-medium px-6 py-4">
                                                {item.donVi}
                                            </td>
                                            <td className="text-sm font-medium  px-6 py-4">
                                                {item.giaTri}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className={`border w-24  rounded-xl font-bold
                                                       py-1 text-xs text-center 
                                                       ${item.trangThai==2 
                                                        ? "bg-red-100 text-red-600" 
                                                        : "bg-yellow-100 text-yellow-600"}
                                                       `}>
                                                   {item.trangThai == 2 ? "Nguy hiểm" : "Cảnh báo"}
                                                </div>
                                            </td>
                                        </tr>);
                                })
                            ) : (<tr>
                                <td colSpan={7} className="text-center text-lg py-4">
                                    Không có dữ liệu cảnh báo
                                </td>
                            </tr>)
                        }
                    </tbody>
                    {/* <tbody>
                        <tr className="bg-neutral-primary border-b border-default">
                            <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                10/01/2026
                            </th>
                            <td className="text-sm font-medium px-6 py-4">
                                08:30
                            </td>
                            <td className="text-sm font-medium px-6 py-4">
                                Thiêu Kết 1 Trộn 1
                            </td>
                            <td className="text-sm font-medium px-6 py-4">
                                Nhiệt độ trước cuộn 1
                            </td>
                            <td className="text-sm font-medium px-6 py-4">
                                Kpa
                            </td>
                            <td className="text-sm font-medium  px-6 py-4">
                                4.2
                            </td>
                            <td className="px-6 py-4">
                                <div className="border w-24 rounded-md font-bold   py-2 text-xs text-center ">
                                    Cảnh báo
                                </div>
                            </td>
                        </tr>

                    </tbody> */}

                </table>
            </div>

        </div>
    )
}

export default WarningHistoryPage;
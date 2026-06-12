import React, { useEffect, useState } from "react";
import type { WarningHistoryConfig } from "../../config/WarningHistoryConfig";
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';
import { SiSolana } from 'react-icons/si';
import Dropdown from "./DropDown";

const WarningHistoryPage: React.FC = () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [warningHistory, setWarningHistory] = useState<WarningHistoryConfig[]>([]);
    const [category, setCategory] = useState<string>("Tất Cả");
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize] = useState(30);
    const [totalPages, setTotalPages] = useState(1);
    const items = [
        { id: 1, text: "Tất Cả", icon: <SiSolana /> },
        { id: 2, text: "TKVV", icon: <FaEthereum /> },
        { id: 3, text: "Nguyên Liệu", icon: <FaEthereum /> },
        { id: 4, text: "Luyện Cốc", icon: <FaEthereum /> },
    ]
    const pages = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    ).filter(
        page =>
            page === 1 ||
            page === totalPages ||
            Math.abs(page - pageNumber) <= 2
    );
    useEffect(() => {
        let url = `${baseUrl}/api/WarningHistory/pagination?pageNumber=${pageNumber}&pageSize=${pageSize}`;

        if (category !== "Tất Cả") {
            url = `${baseUrl}/api/WarningHistory/search?category=${encodeURIComponent(category)}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setWarningHistory(data.data || []);
                setTotalPages(data.pagination.totalPages || 1);
            })
            .catch(error => {
                console.error("Lỗi khi gọi API:", error);
            });

    }, [pageNumber, category]);


    return (
        <div className="theme-swiss sm:m-6 sm:ml-10 space-y-10 h-full px-6  pt-4 pb-20 bg-white " >

            <div className="relative overflow-x-auto bg-grey-primary-soft shadow-xs rounded-base">
                <div className="p-4 flex items-center justify-between space-x-4">
                    <h2 className="text-xl font-extrabold text-skin-inverted sm:text-xl">
                        <span className="block">Lịch Sử Cảnh Báo</span>
                    </h2>
                    <div className="p-6">
                        <Dropdown
                            buttonIconLeft={<FaBitcoin />}
                            buttonText={category}
                            buttonIconRight={<RiArrowDownSLine />}
                            items={items}
                            onSelect={(item) => {
                                setCategory(item.text);
                                setPageNumber(1); // quay về trang đầu khi đổi bộ lọc
                            }}
                        />
                    </div>
                </div>
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
                                Nhà Máy
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
                                                {item.xuong}
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
                                                       ${item.trangThai == 2
                                                        ? "bg-red-100 text-red-600"
                                                        : "bg-yellow-100 text-yellow-600"}
                                                       `}>
                                                    {item.trangThai == 2 ? "Nguy hiểm" : "Cảnh báo"}
                                                </div>
                                            </td>
                                        </tr>);
                                })
                            ) : (<tr>
                                <td colSpan={8} className="text-center text-lg font-extrabold text-skin-inverted py-4">
                                    Không có dữ liệu cảnh báo
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

           { warningHistory.length > 0 ? <div className="flex justify-center items-center gap-4">
                <nav className="flex items-center gap-x-1" aria-label="Pagination">
                    <button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-foreground hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none" aria-label="Previous"
                        onClick={() => setPageNumber(prev => prev - 1)}
                        disabled={pageNumber === 1}
                    >
                        <svg aria-hidden="true" className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        <span>Previous</span>
                    </button>
                    {/* Page Numbers */}
                    <div className="flex items-center gap-x-1">
                        {pages.map(page => (
                            <button
                                key={page}
                                type="button"
                                onClick={() => setPageNumber(page)}
                                aria-current={page === pageNumber ? "page" : undefined}
                                className={`
                    min-h-9.5 min-w-9.5 flex justify-center items-center
                    py-2 px-3 text-sm rounded-lg
                    focus:outline-hidden
                    disabled:opacity-50 disabled:pointer-events-none
                    ${page === pageNumber
                                        ? "bg-[#05428c] text-white font-semibold"
                                        : "text-foreground hover:bg-muted-hover"
                                    }
                `}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                    <button type="button" className="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-foreground hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none" aria-label="Next"
                        onClick={() => setPageNumber(prev => prev + 1)}
                        disabled={pageNumber === totalPages}
                    >
                        <span>Next</span>
                        <svg aria-hidden="true" className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </nav>
            </div> : <div> </div>}

        </div>
    )
}

export default WarningHistoryPage;
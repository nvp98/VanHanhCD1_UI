import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useOutletContext } from "react-router-dom";
import clsx from "clsx";
import { QUATGIO2_CONFIG, QUATGIO2_SECTION } from "../../config/QuatGioPhuTroConfig";
import FlowDashboardChart from "../../components/DashboardChart";

type OutletContextType = { isSidebarOpen: boolean };

type MinValue = {
    id: number;
    tagName: string;
    thoiGian: string;
    giaTri: number;
};


const QGC2ThieuKet1: React.FC = () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const { isSidebarOpen } = useOutletContext<OutletContextType>();
    const [tagSymbolMap, setTagSymbolMap] = useState<Map<string, string>>(new Map());
    const [tagUnitMap, setTagUnitMap] = useState<Map<string, string>>(new Map());
    const [tagWarningMap, setTagWarningMap] = useState<Map<string, number>>(new Map());
    const [tagRiskyMap, setTagRiskyMap] = useState<Map<string, number>>(new Map());
    const [dataRows, setDataRows] = useState<any[]>([]);
    const [dataColumns, setDataColumns] = useState<string[]>([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [exporting, setExporting] = useState(false);
    const [tagMinValue, setTagMinValue] = useState<MinValue[]>([]);
    const tagIndex = { current: 0 };
     const [visible, setVisible] = useState({
            table: true,
            chart: false,
        });
    useEffect(() => {
        fetch("/TagWarning.xlsx")
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "buffer" });
                const sheet = workbook.Sheets[workbook.SheetNames[9]];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];
                const map = new Map<string, string>();
                const mapUnit = new Map<string, string>();
                const mapWarning = new Map<string, number>();
                const mapRiskly = new Map<string, number>();
                rows.forEach(row => {
                    const tag = row[3];
                    const symbol = row[4];
                    const unit = row[5];
                    const warning = row[6];
                    const riskly = row[7];
                    if (tag && symbol) map.set(tag.trim(), symbol.trim());
                    if (tag && unit) mapUnit.set(tag.trim(), unit.trim());
                    if (tag && warning) mapWarning.set(tag, parseFloat(warning));
                    if (tag && riskly) mapRiskly.set(tag, parseFloat(riskly));
                });
                setTagSymbolMap(map);
                setTagUnitMap(mapUnit);
                setTagWarningMap(mapWarning);
                setTagRiskyMap(mapRiskly);

            });
    }, []);

    useEffect(() => {
        fetch(`${baseURL}/api/QuatGioHai/last-24h`)
            .then(res => res.json())
            .then(data => {
                setDataRows(data);
                const times = data.map((time: any) => time.ThoiGian).filter(Boolean);
                setDataColumns(times);
            })
            .catch(error => {
                console.error("Lỗi khi gọi API:", error);
            })
    }, [])

    useEffect(() => {
        fetch(`${baseURL}/api/QuatGioHai/min-value`)
            .then(res => res.json())
            .then(data => {
                setTagMinValue(data);

                // const times = data.map((time: any) => time.ThoiGian).filter(Boolean);
                // setDataColumns(times);
            })
            .catch(error => {
                console.error("Lỗi khi gọi API:", error);
            })
    }, [])

    const handleSearch = async () => {
        if (!fromDate || !toDate) {
            alert("Vui lòng chọn đầy đủ thời gian");
            return;
        }

        const from = fromDate;
        const to = toDate;
        setLoading(true);

        try {
            const res = await fetch(`${baseURL}/api/QuatGioHai/search?from=${from}&to=${to}`);
            const data = await res.json();
            setDataRows(data);
            const times = data.map((time: any) => time.ThoiGian).filter(Boolean);
            setDataColumns(times);
        } catch (error) {
            console.error("Lỗi khi tìm kiếm: ", error)
        } finally {
            setLoading(false);
        }
    };

    const handleExportExcel = async () => {
        if (!fromDate || !toDate) {
            alert("Vui lòng chọn thời gian trước khi xuất Excel");
            return;
        }

        setExporting(true);

        try {
            const res = await fetch(`${baseURL}/api/QuatGioHai/export?from=${fromDate}&to=${toDate}`);
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");

            const formatDate = (dateStr: string) => {
                const datetime = new Date(dateStr);
                const dd = datetime.getDate().toString().padStart(2, "0");
                const mm = (datetime.getMonth() + 1).toString().padStart(2, "0");
                const yyyy = datetime.getFullYear();
                return `${dd}-${mm}-${yyyy}`;
            }

            const fromStr = formatDate(fromDate);
            const toStr = formatDate(toDate);

            link.href = url;
            link.download = `BM.01/HD.05.53-19_NKVH_QuatGioChinh1_${fromStr}_đến_${toStr}.xlsx`;
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("Lỗi khi xuất Excel:", error);
            alert("Có lỗi khi xuất Excel");
        } finally {
            setExporting(false);
        }
    };

    const renderTagCellWithData = (label: string) => {
        const tag = tagSymbolMap.get(label) as string;
        const tagUnit = tagUnitMap.get(label);
        const tagWarning = tagWarningMap.get(label);
        const tagRisky = tagRiskyMap.get(label);
        const display = tagUnit || label;
        const values =
            tag
                ? tagMinValue.find(
                    d => d.tagName === tag
                )?.giaTri ?? "⏳"
                : "⏳";

        const rowCells = [
            <td key={`${label}-symbol`} className="sticky left-[12.7rem] bg-white border px-2 py-1 text-xs">{display}</td>,
            <td key={`${label}-value`} className="sticky left-[17.2rem] bg-white border px-2 py-1 text-xs">{values}</td>,
            <td key={`${label}-warning`} className="sticky left-[24rem] bg-white border px-2 py-1 text-xs">{tagWarning}</td>,
            <td key={`${label}-risky`} className="sticky left-[29rem] bg-white border px-2 py-1 text-xs">{tagRisky}</td>
        ];

        const result: { [key: string]: any } = {
            [tag]: tagWarning
        }
        const resultNguyHiem: { [key: string]: any } = {
            [tag]: tagRisky
        }

        // them du lieu vao
        for (const time of dataColumns) {
            const row = dataRows.find(r => r.ThoiGian == time);

            //console.log(row);
            const value = tag ? row?.[tag] ?? "" : "";
            // So sánh value với result[tag] (tức là tagBao)
            const isEqual = value > result[tag]; // So sánh với tagBao từ result
            const isNguyeHiem = value > resultNguyHiem[tag];
            //const isNotEqual = value !== result[tag]; // Kiểm tra khi giá trị khác nhau
            const isEmpty = value === ""; // Kiểm tra khi value trống

            // Áp dụng các lớp CSS tùy thuộc vào kết quả so sánh
            let cellClass = "border px-2 py-1 text-xs text-center ";

            // Logic để áp dụng lớp CSS
            if (isNguyeHiem) {
                cellClass += " bg-red-100 text-red-600"; // Giá trị trùng khớp (ví dụ: màu xanh lá)
            }
            else if (isEqual) {
                cellClass += " bg-yellow-100 text-yellow-600"; // Giá trị trùng khớp (ví dụ: màu xanh lá)
            } else if (isEmpty) {
                cellClass += " bg-gray-100"; // Nếu value trống (ví dụ: màu xám)
            }
            rowCells.push(
                <td key={`${tag}-${time}`} className={cellClass}>
                    {value}
                </td>
            );
        }
        return rowCells;
    };

    const renderNestedRows = (): React.ReactNode[] => {
        const rows: React.ReactNode[] = [];
        QUATGIO2_SECTION.forEach(sec => {
            const tempRowCounter = { current: 0 };
            const rowsWithChildren = sec.rows?.filter(r => r.children) || [];
            const rowsWithoutChildren = sec.rows?.filter(r => !r.children) || [];
            const sectionRowCount = rowsWithChildren.reduce((sum, row) => sum + (row.children?.length || 1), 0) +
                rowsWithoutChildren.length;

            if (!sec.rows || sec.rows.length === 0) {
                const tag = `Tag${tagIndex.current++}`;
                rows.push(
                    <tr key={sec.section} className="text-center text-xs">
                        <td
                            className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle"
                            colSpan={3}
                        >
                            {sec.section}
                        </td>

                        {renderTagCellWithData(tag)}
                    </tr>
                );
                return;
            }



            sec.rows.forEach((row) => {
                if (row.children && Array.isArray(row.children)) {
                    row.children.forEach((label, index) => {
                        const tag = `Tag${tagIndex.current++}`;
                        rows.push(
                            <tr
                                key={`${sec.section}-${row.label}-${index}`}
                                className="text-center text-xs hover:bg-white-50"
                            >
                                {tempRowCounter.current === 0 && (
                                    <td
                                        rowSpan={sectionRowCount}

                                        className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                                    >
                                        {sec.section}
                                    </td>
                                )}
                                {index === 0 && (
                                    <td

                                        rowSpan={row.children?.length}
                                        className="sticky left-[3.9rem] bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                                    >
                                        {row.label}
                                    </td>
                                )}
                                <td className="sticky left-[8.9rem] bg-white border px-2 py-1">{label}</td>
                                {renderTagCellWithData(tag)}
                            </tr>
                        );
                        tempRowCounter.current++;
                    });
                } else {
                    const tag = `Tag${tagIndex.current++}`;
                    rows.push(
                        <tr
                            key={`${sec.section}-${row.label}`}
                            className="text-center text-xs"
                        >
                            {tempRowCounter.current === 0 && (
                                <td
                                    rowSpan={sectionRowCount}
                                    className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                                >
                                    {sec.section}
                                </td>
                            )}
                            <td
                                className="sticky left-[3.9rem] bg-white font-semibold border px-2 py-1 whitespace-nowrap"
                                colSpan={2}
                            >
                                {row.label}
                            </td>
                            {renderTagCellWithData(tag)}
                        </tr>
                    );
                    tempRowCounter.current++;
                }
            });
        })

        return rows;

    };

    return (
        <section
            className={clsx(
                "transition-all duration-500 py-6",
                {
                    "w-[calc(100vw-16rem)] px-6 ml-auto": isSidebarOpen,
                    "max-w-screen-2xl w-full px-4 mx-auto": !isSidebarOpen,
                }
            )}
        >

            <div className="bg-white rounded-xl shadow ring-1 ring-gray-200 p-6 space-y-6">
                {/* Tiêu đề + filter + nút export */}
                <div className="flex flex-wrap justify-center items-center gap-4 relative">
                    {/* Nút xuất file bên phải */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
                         <button
                            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:shadow-md transition"
                            onClick={() =>
                                setVisible(prev => ({
                                    table: !prev.table,
                                    chart: !prev.chart,
                                }))
                            }
                        >
                            {visible.chart ? "Xem Bảng" : "Xem Đồ Thị"}
                        </button>
                    </div>
                    {/* Nút xuất file bên phải */}

                    {/* Tiêu đề và bộ lọc thời gian ở giữa */}
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-800 text-center">
                            Quạt Gió 2 Thiêu Kết 1
                        </h1>

                        <div className="flex flex-wrap justify-center items-end gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600">Từ ngày</label>
                                <input
                                    type="datetime-local"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                    className="border border-gray-300 px-3 py-2 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600">Đến ngày</label>
                                <input
                                    type="datetime-local"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                    className="border border-gray-300 px-3 py-2 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 shadow-sm text-sm font-medium transition"
                                onClick={handleSearch}
                                disabled={loading}
                            >
                                {"🔍 Tìm kiếm"}
                            </button>
                        </div>
                    </div>

                </div>
                {/* Tiêu đề + filter + nút export */}

                {/* Bảng dữ liệu */}
                {visible.table &&<div className="border rounded-xl overflow-x-auto max-w-full  max-h-[60vh]">
                    <table className="min-w-full table-auto text-sm border-collapse border border-gray-300 bg-white">
                        <thead className="bg-gray-100 text-gray-800 text-center sticky top-0 z-20">
                            <tr>
                                <th className="border px-4 py-2 sticky left-0 z-30 bg-gray-100">Mục</th>
                                <th className="border px-4 py-2 sticky left-[62px] z-30 bg-gray-100 whitespace-nowrap" colSpan={2}>
                                    Vị trí đo / Thời gian
                                </th>
                                <th className="border px-4 py-2 sticky left-[12.4rem] z-30 bg-gray-100 whitespace-nowrap">Đơn Vị</th>
                                <th className="border px-4 py-2 sticky left-[17.2rem] z-30 bg-gray-100  whitespace-nowrap">MIN 3 Tháng</th>
                                <th className="border px-4 py-2 sticky left-[24rem] z-30 bg-gray-100 whitespace-nowrap">Cảnh báo</th>
                                <th className="border px-4 py-2 sticky left-[29rem] z-30 bg-gray-100 whitespace-nowrap">Nguy hiểm</th>
                                {dataColumns.map((time, idx) => (
                                    <th
                                        key={idx}
                                        className="border px-4 py-2 whitespace-nowrap bg-white hover:bg-blue-50 transition text-xs"
                                    >
                                        <div className="flex flex-col leading-tight">
                                            <span className="font-medium text-gray-700">
                                                {new Date(time).toLocaleDateString("vi-VN", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "2-digit",
                                                })}
                                            </span>
                                            <span className="text-gray-500">
                                                {new Date(time).toLocaleTimeString("vi-VN", {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </span>
                                        </div>
                                    </th>

                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-gray-800 even:bg-gray-50">
                            {renderNestedRows()}
                        </tbody>
                    </table>
                </div>}
                  {visible.chart &&<FlowDashboardChart
                                                                    rawData={dataRows}
                                                                    TAG_CONFIG={QUATGIO2_CONFIG}
                                                                />}   
            </div>
            {loading && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white px-6 py-4 rounded shadow text-lg font-semibold">
                        Đang tải dữ liệu, vui lòng chờ...
                    </div>
                </div>
            )}
            {(loading || exporting) && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white px-6 py-4 rounded shadow text-lg font-semibold">
                        {loading ? "Đang tải dữ liệu, vui lòng chờ..." : "Đang xuất file Excel..."}
                    </div>
                </div>
            )}


        </section>
    );
}

export default QGC2ThieuKet1;
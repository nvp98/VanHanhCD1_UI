import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useOutletContext } from "react-router-dom";
import clsx from "clsx";
import AlertMessage from "../../components/AlertMessage";
import Loading from "../../components/Loading";

type OutletContextType = { isSidebarOpen: boolean };


const sectionRowData = [
    {
        section: "Bao hơi ống khói",
        rows: [
            { label: "Áp suất (mpa)" },
            { label: "Mức nước trên (mm)" },
            { label: "Mức nước dưới (mm)" },
        ]
    },
    {
        section: "Hơi chính bộ quá nhiệt ống khói",
        rows: [
            { label: "Áp suất (mpa)" },
            { label: "Nhiệt độ (°C)" },
            { label: "Lưu lượng (m3/h)" },
        ]
    },
    {
        section: "Nước cấp nồi hơi áp suất cao",
        rows: [
            { label: "Áp suất (mpa)" },
            { label: "Nhiệt độ cấp (°C)" },
            { label: "Lưu lượng (m3/h)" },
            { label: "Nhiệt độ TKT (°C)" },
            { label: "Áp suất sau TKT (mpa)" },
        ]
    },
    {
        section: "Khí khói nóng đầu bộ quá nhiệt 1",
        rows: [
            { label: "Áp suất (Kpa)" },
            { label: "Nhiệt độ (°C)" },
        ]
    },
    {
        section: "Khí khói nóng đầu bộ quá nhiệt 2",
        rows: [
            { label: "Áp suất (Kpa)" },
            { label: "Nhiệt độ (°C)" },
        ]
    },
    {
        section: "Khí khói nóng đầu ra bộ TKT 1",
        rows: [
            { label: "Nhiệt độ (°C)" },
            { label: "Áp suất (Kpa)" },
        ]
    },
    {
        section: "Khí khói nóng đầu ra bộ TKT 2",
        rows: [
            { label: "Nhiệt độ (°C)" },
            { label: "Áp suất (Kpa)" },
        ]
    },
    {
        section: "Quạt tuần hoàn nồi hơi làm mát vòng",
        rows: [
            { label: "Dòng điện (A)" },
            { label: "Tốc độ động cơ (mrp/min)" },
            { label: "Nhiệt độ gối trước  động cơ (°C)"},
            { label: "Nhiệt độ gối sau động cơ (°C)"},
            { label: "Nhiệt độ cuộn dây pha A (°C)" },
            { label: "Nhiệt độ cuộn dây pha B (°C)" },
            { label: "Nhiệt độ cuộn dây pha C (°C)" },
            { label: "Độ rung gối trước động cơ (mm/s)" },
            { label: "Độ rung gối sau động cơ (mm/s)" },
            { label: "Nhiệt độ tủ biến tần (°C)" },
            { label: "Nhiệt độ gối trước quạt (°C)" },
            { label: "Nhiệt độ gối sau quạt (°C)" },
            { label: "Độ rung gối trước bầu quạt (trục X) (mm/s)" },
            { label: "Độ rung gối trước bầu quạt (trục Y) (mm/s)" },
            { label: "Độ rung gối sau bầu quạt (trục X) (mm/s)" },
            { label: "Độ rung gối sau bầu quạt (trục Y) (mm/s)" },
        ]
    },
]


const BM_NoiHoiOngKhoiThieuKet1: React.FC = () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const { isSidebarOpen } = useOutletContext<OutletContextType>();
    const [tagSymbolMap, setTagSymbolMap] = useState<Map<string, string>>(new Map());
    const [dataRows, setDataRows] = useState<any[]>([]);
    const [dataColumns, setDataColumns] = useState<string[]>([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [exporting, setExporting] = useState(false);
     const [warning, setWarning] = useState<string | null>(null);
    const tagIndex = { current: 0 };

    useEffect(() => {
        fetch("/TagPhuTro.xlsx")
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "buffer" });
                const sheet = workbook.Sheets[workbook.SheetNames[5]];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];
                const map = new Map<string, string>();
                rows.forEach(row => {
                    const tag = row[2];
                    const symbol = row[3];
                    if (tag && symbol) map.set(tag.trim(), symbol.trim());
                });
                setTagSymbolMap(map)
            });
    }, []);

    useEffect(() => {
        fetch(`${baseURL}/api/NoiHoiOngKhoi/last-24h`)
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
            if (warning) {
                const timer = setTimeout(() => setWarning(null), 2000);
                return () => clearTimeout(timer);
            }
        }, [warning]);

    const handleSearch = async () => {
       if (!fromDate || !toDate) {
            //alert("Vui lòng chọn đầy đủ thời gian");
            setWarning("⚠️Chọn đầy đủ thời gian");
            return;
        }
        else if (fromDate >= toDate) {
            setWarning("❌ Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc");
            return;
        }

        const from = fromDate;
        const to = toDate;
        setWarning(null);
        setLoading(true);

        try {
            const res = await fetch(`${baseURL}/api/NoiHoiOngKhoi/search?from=${from}&to=${to}`);
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
           setWarning("⚠️Chọn đầy đủ thời gian");
            return;
        }
         else if (fromDate >= toDate) {
            setWarning("❌ Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc");
            return;
        }
        setWarning(null);

        setExporting(true);

        try {
            const res = await fetch(`${baseURL}/api/NoiHoiOngKhoi/export?from=${fromDate}&to=${toDate}`);
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
            link.download = `BM.01/HD.05.60-19_NKVH_NoiHoiOngKhoLamMatVong1_${fromStr}_đến_${toStr}.xlsx`;
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
        const tag = tagSymbolMap.get(label);
        const display = tag || label;

        const rowCells = [
            <td key={`${label}-symbol`} className="sticky left-[14rem] bg-white border px-2 py-1 text-xs">{display}</td>
        ];

        // them du lieu vao
        for (const time of dataColumns) {
            const row = dataRows.find(r => r.ThoiGian == time);
            const value = tag ? row?.[tag] ?? "" : "";
            rowCells.push(
                <td key={`${tag}-${time}`} className="border px-2 py-1 text-xs text-center">
                    {value}
                </td>
            );
        }
        return rowCells;
    };

    const renderNestedRows = (): React.ReactNode[] => {
        const rows: React.ReactNode[] = [];

        sectionRowData.forEach(sec => {
            const sectionRowCount = sec.rows?.length || 0;
            let rowIndex = 0;
            if (!sec.rows || sec.rows.length === 0) {
                const tag = `Tag${tagIndex.current++}`;
                rows.push(
                    <tr key={sec.section} className="text-center text-xs">
                        <td
                            className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle"
                            colSpan={4}
                        >
                            {sec.section}
                        </td>

                        {renderTagCellWithData(tag)}
                    </tr>
                );
                return;
            }

            sec.rows?.forEach(row => {
                const tag = `Tag${tagIndex.current++}`;

                rows.push(
                    <tr key={`${sec.section}-${row.label}`} className="text-center text-xs">
                        {/* Chỉ render section 1 lần với rowSpan */}
                        {rowIndex === 0 && (
                            <td
                                rowSpan={sectionRowCount}
                                className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                            >
                                {sec.section}
                            </td>
                        )}

                        {/* Cột label */}
                        <td
                            className="sticky left-[4rem] bg-white font-semibold border px-2 py-1"
                            colSpan={3}
                        >
                            {row.label}
                        </td>

                        {/* Render dữ liệu */}
                        {renderTagCellWithData(tag)}
                    </tr>
                );

                rowIndex++;
            });
        });

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
                            onClick={handleExportExcel}
                            disabled={exporting}
                        >
                            {exporting ? "Đang xuất..." : "📥 Xuất Excel"}
                        </button>
                    </div>
                    {/* Nút xuất file bên phải */}

                    {/* Tiêu đề và bộ lọc thời gian ở giữa */}
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-800 text-center">
                            Nhật ký vận hành Nồi Hơi Ống Khói Và Quạt Gió Làm Mát Vòng #1
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
                <div className="border rounded-xl overflow-x-auto max-w-full  max-h-[60vh]">
                    <table className="min-w-full table-auto text-sm border-separate border border-gray-300 bg-white">
                        <thead className="bg-gray-100 text-gray-800 text-center sticky top-0 z-20">
                            <tr>
                                <th className="border px-4 py-2 sticky left-0 z-30 bg-gray-100">Mục</th>
                                <th className="border px-4 py-2 sticky left-[4rem] z-30 bg-gray-100 whitespace-nowrap" colSpan={3}>
                                    Vị trí đo / Thời gian
                                </th>
                                <th className="border px-4 py-2 sticky left-[14rem] z-30 bg-gray-100">Ký hiệu</th>
                                {/* th time */}
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
                </div>
                {/* Bảng dữ liệu */}


            </div>
            {loading && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
                    <Loading/>
                </div>
            )}
            {(loading || exporting) && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
                    {loading
                        ?
                        <Loading/>
                        :
                        <Loading/>
                    }
                </div>
            )}
        
         {warning &&
                <div className="fixed inset-0 z-50 flex items-start justify-end mt-12">
                    <AlertMessage type="Vui lòng" message={warning} />
                </div>
            }

        </section>
    );
}

export default BM_NoiHoiOngKhoiThieuKet1;
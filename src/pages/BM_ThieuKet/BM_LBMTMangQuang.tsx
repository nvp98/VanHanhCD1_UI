import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useOutletContext } from "react-router-dom";
import clsx from "clsx";
import AlertMessage from "../../components/AlertMessage";
import Loading from "../../components/Loading";

type OutletContextType = { isSidebarOpen: boolean };
type RowType = {
    label: string;
    children?: string[];
};

type SectionType = {
    section: string;
    rows?: RowType[];
};


const sectionPhoiLieuRowData = [
    {
        section: "Góc mở cửa gió"
    },
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Đầu khói vào" },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },
    {
        section: "Áp suất",
        rows: [
            { label: "Đầu vào" },
            { label: "Đầu ra" },
        ],
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ quạt gió", children: ["Trước x", "Trước y", "Sau x", "Sau y"] },
        ],
    },
    {
        section: "Dòng điện"
    },
    {
        section: "Nồng độ bụi",
        rows: [{ label: "Vào" }, { label: "Ra" }]
    }
]

const sectionBanLuocRowData = [
    {
        section: "Góc mở cửa gió"
    },
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Đầu khói vào" },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },
    {
        section: "Áp suất",
        rows: [
            { label: "Đầu vào" },
            { label: "Đầu ra" },
        ],
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ quạt gió", children: ["Trước x", "Trước y", "Sau x", "Sau y"] },
        ],
    },
    {
        section: "Dòng điện"
    },
    {
        section: "Nồng độ bụi",
        rows: [{ label: "Vào" }, { label: "Ra" }]
    }
]



const BM_LBMTMangQuang: React.FC = () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const apiURL = baseURL + "/api/LocBuiMoiTruongMangQuang";
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
        fetch("/TagLBMT.xlsx")
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "buffer" });
                const sheet = workbook.Sheets[workbook.SheetNames[2]];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];
                const map = new Map<string, string>();
                rows.forEach(row => {
                    const tag = row[4];
                    const symbol = row[5];
                    if (tag && symbol) map.set(tag.trim(), symbol.trim());
                });
                setTagSymbolMap(map)
            });
    }, []);

    useEffect(() => {
        fetch(`${apiURL}/last-24h`)
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
            const res = await fetch(`${apiURL}/search?from=${from}&to=${to}`);
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
            //alert("Vui lòng chọn đầy đủ thời gian");
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
            const res = await fetch(`${apiURL}/export?from=${fromDate}&to=${toDate}`);
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
            link.download = `BM.13-QT.05.03_NKVH_LocBuiMoiTruongMangQuang_${fromStr}_đến_${toStr}.xlsx`;
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
            <td key={`${label}-symbol`} className="sticky left-[12rem] bg-white border px-2 py-1 text-xs">{display}</td>
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

    const renderNestedRows = (sections: SectionType[], name: string, rowNumber: number): React.ReactNode[] => {
        const rows: React.ReactNode[] = [];
        let didRenderName = false;
        sections.forEach(sec => {
            const tempRowCounter = { current: 0 };
            const rowsWithChildren = sec.rows?.filter(r => r.children) || [];
            const rowsWithoutChildren = sec.rows?.filter(r => !r.children) || [];
            const sectionRowCount = rowsWithChildren.reduce((sum, row) => sum + (row.children?.length || 1), 0) +
                rowsWithoutChildren.length;



            if (!sec.rows || sec.rows.length === 0) {
                const tag = `Tag${tagIndex.current++}`;
                rows.push(
                    <tr key={sec.section} className="text-center text-xs">
                        {!didRenderName && (<td rowSpan={rowNumber} className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle">
                            {name}
                        </td>)}
                        <td
                            className="sticky left-[4rem] bg-white border px-2 py-1 font-semibold align-middle"
                            colSpan={3}
                        >
                            {sec.section}
                        </td>

                        {renderTagCellWithData(tag)}
                    </tr>
                );
                if (!didRenderName) didRenderName = true;
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

                                        className="sticky left-[3.9rem] bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                                    >
                                        {sec.section}
                                    </td>
                                )}
                                {index === 0 && (
                                    <td

                                        rowSpan={row.children?.length}
                                        className="sticky left-[6.9rem] bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                                    >
                                        {row.label}
                                    </td>
                                )}
                                <td className="sticky left-[9.3rem] bg-white border px-2 py-1">{label}</td>
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
                                    className="sticky left-[3.9rem] bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                                >
                                    {sec.section}
                                </td>
                            )}
                            <td
                                className="sticky left-[6.9rem] bg-white font-semibold border px-2 py-1"
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
                            Nhật ký vận hành Lọc Bụi Môi Trường Máng Quặng #1 Và #2
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
                    <table className="min-w-full table-auto text-sm border-collapse border border-gray-300 bg-white">
                        <thead className="bg-gray-100 text-gray-800 text-center sticky top-0 z-20">
                            <tr>
                                <th className="border px-4 py-2 sticky left-0 z-30 bg-gray-100">Mục</th>
                                <th className="border px-4 py-2 sticky left-[62px] z-30 bg-gray-100 " colSpan={3}>
                                    Vị trí đo / Thời gian
                                </th>
                                <th className="border px-4 py-2 sticky left-[12rem] z-30 bg-gray-100">Ký hiệu</th>
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
                            {renderNestedRows(sectionPhoiLieuRowData, "Khu vực: Máng quặng #1", 13)}
                            {renderNestedRows(sectionBanLuocRowData, "Khu vức: Máng quặng #2", 13)}
                        </tbody>
                    </table>
                </div>
            </div>
            {loading && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
                    <Loading />
                </div>
            )}
            {(loading || exporting) && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
                    {loading
                        ?
                        <Loading />
                        :
                        <Loading />
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

export default BM_LBMTMangQuang;
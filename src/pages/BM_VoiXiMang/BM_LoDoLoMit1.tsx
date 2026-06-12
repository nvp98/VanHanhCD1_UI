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

const sectionRowData: SectionType[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Khí thải đỉnh lò", children: ["5404", "5408", "5414", "5418"] },
            { label: "Vùng dự nhiệt", children: ["4405", "4412", "4420"] },
            { label: "Biên vùng dự nhiệt", children: ["4402", "4405", "4409", "4412", "4415", "4419"] },
            { label: "Vùng nung", children: ["3201", "3203", "3206", "3208", "3211", "3213", "3216", "3218"] },
            { label: "Vùng làm mát đáy lò", children: ["1808", "1818"] },
            { label: "Xả liệu đáy lò", children: ["1403", "1408", "1413", "1418"] },
            { label: "Ống vây gió trợ đốt", children: ["4311"] },
            { label: "Bộ trao dổi nhiệt", children: ["Khí thải đầu vào", "Khí than đầu vào", "Khí than đầu ra"] },
            { label: "Làm mát dầm gió đầu ra" },
            { label: "Bộ lọc bụi", children: ["Đầu vào", "Đầu ra"] },
        ],

    },
    {
        section: "Áp suất (Kpa)",
        rows: [
            { label: "Ống tổng khí than" },
            { label: "Ống vây khí than hàng 1" },
            { label: "Ống vây khí than hàng 2" },
            { label: "Ống vây khí than hàng 3" },
            { label: "Ống vây khí than hàng 4" },
            { label: "Ống vây khí than trung tâm" },
            { label: "Ống vây gió trợ đốt hàng 1" },
            { label: "Ống vây gió trợ đốt hàng 2" },
            { label: "Ống vây gió trợ đốt hàng 3" },
            { label: "Ống vây gió trợ đốt hàng 4" },
            { label: "Ống vây gió trợ đốt trung tâm" },
            { label: "Áp suất trong lò" },
            { label: "Ống vây gió điều tiết nhiệt" },
            { label: "Gió làm mát đáy lò" },
            { label: "Ống vây gió làm mát" },
            { label: "Áp suất quạt trợ đốt" },
            { label: "Áp đỉnh lò" },
            { label: "Khí Ni tơ" },
        ],
    },
    {
        section: "Lưu lượng",
        rows: [
            { label: "Ống khí than trung tâm" },
            { label: "Ống vây khí than sườn hàng 1" },
            { label: "Ống vây khí than sườn hàng 2" },
            { label: "Ống vây khí than sườn hàng 3" },
            { label: "Ống vây khí than sườn hàng 4" },
            { label: "Gió trợ đốt trung tâm" },
            { label: "Gió trợ đốt hàng 1" },
            { label: "Gió trợ đốt hàng 2" },
            { label: "Gió trợ đốt hàng 3" },
            { label: "Gió trợ đốt hàng 4" },
            { label: "Ống nhánh khí than trung tâm", children: ["FT11", "FT12", "FT13", "FT14"] },
            { label: "Ống nhánh gió sơ cấp trung tâm", children: ["FT19", "FT20", "FT21", "FT22"] },
            { label: "Gió làm mát đáy lò" },
            { label: "Ống vây gió làm mát" },
            { label: "Gió làm mát đáy lò" },
            { label: "Ống vây gió làm mát" },
        ]
    },
    {
        section: "Phần trăm van",
        rows: [
            {
                label: "Độ mở % van điều tiết gió",
                children: ["Nhiệt độ", "(℃)", "BVĐL", "LM đáy lò",
                    "Ống vây gió LM", "Hàng 1", "Hàng 2", "Hàng 3", "Hàng 4"]
            },
            {
                label: "Độ mở % van điều tiết  khí than",
                children: ["KT Trung tâm", "Hàng 1", "Hàng 2", "Hàng 3", "Hàng 4"]
            },
        ]
    },
    {
        section: "Áp suất lò"
    },
    {
        section: "Áp suất ống tổng khí than"
    },
    {
        section: "Phần trăm van điều tiết nhiệt độ"
    },
]


const BM_LoDoLoMit1: React.FC = () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const apiURL = baseURL + "/api/LoDoMitMot";
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
        fetch("/TagVoiXiMang.xlsx")
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "buffer" });
                const sheet = workbook.Sheets[workbook.SheetNames[3]];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];
                const map = new Map<string, string>();
                rows.forEach(row => {
                    const tag = row[3];
                    const symbol = row[4];
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
            link.download = `BM.01/HD.05.53-19_NKVH_LoDOLOMIT1_${fromStr}_đến_${toStr}.xlsx`;
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
            <td key={`${label}-symbol`} className="sticky left-[14.9rem] bg-white border px-2 py-1 text-xs">{display}</td>
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
                                <td className="sticky left-[10.9rem] bg-white border px-2 py-1">{label}</td>
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
                            Nhật ký vận hành Lò DoLoMit 1
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
                                <th className="border px-4 py-2 sticky left-[62px] z-30 bg-gray-100 whitespace-nowrap" colSpan={2}>
                                    Vị trí đo / Thời gian
                                </th>
                                <th className="border px-4 py-2 sticky left-[14.9rem] z-30 bg-gray-100">Ký hiệu</th>
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

export default BM_LoDoLoMit1;
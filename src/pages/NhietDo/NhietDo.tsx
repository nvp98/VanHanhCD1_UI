import React, { Children, useEffect, useState } from "react";
import * as XLSX from "xlsx";

import { useOutletContext } from "react-router-dom";
import clsx from "clsx";

import FlowDashboardChart from "../../components/DashboardChart";
const TAG_CONFIG = [
  {
    area: "Khu cấp gió",
    tags: [
      { key: "TI1713M", label: "Lưu lượng gió", color: "#6366f1" },
      { key: "TI1715cM", label: "Khí vào", color: "#22c55e" },
      { key: "TI1701M", label: "Tốc độ quạt", color: "#f97316" }
    ]
  },
  {
    area: "Khu nhiệt độ",
    tags: [
      { key: "TI1713M", label: "Lưu lượng gió", color: "#6366f1" },
      { key: "TI1715cM", label: "Khí vào", color: "#22c55e" },
      { key: "TI1701M", label: "Tốc độ quạt", color: "#f97316" }
    ]
  },
  {
    area: "Khu nhiệt độ",
    tags: [
      { key: "TI1713M", label: "Lưu lượng gió", color: "#6366f1" },
      { key: "TI1715cM", label: "Khí vào", color: "#22c55e" },
      { key: "TI1701M", label: "Tốc độ quạt", color: "#f97316" }
    ]
  }
];

type OutletContextType = { isSidebarOpen: boolean };
type RowType = {
    label: string;
    children?: string[];
};

type SectionType = {
    name: string;
    section: string;
    rows?: RowType[];
};
type MaxValue = {
    id: number;
    tagName: string;
    thoiGian: string;
    giaTri: number;
};


const sectionPhoiLieuRowData = [
    {
        name: "Phối liệu",
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Đầu khói vào" },
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Gối đỡ động cơ", children: ["Trước", "Sau"] },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },

]

const sectionBanLuocRowData = [
    {
        name: "Đuôi Máy #1",
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Đầu khói vào" },
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Gối đỡ động cơ", children: ["Trước", "Sau"] },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },
]



const NhietDo: React.FC = () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const apiURL = baseURL + "/api/LBMTMangQuangVeVien";
    const { isSidebarOpen } = useOutletContext<OutletContextType>();
    const [tagSymbolMap, setTagSymbolMap] = useState<Map<string, string>>(new Map());
    const [tagUnitMap, setTagUnitMap] = useState<Map<string, string>>(new Map());
    const [tagBaoMap, setTagBaoMap] = useState<Map<string, number>>(new Map());
    const [tagNguyHiemMap, setTagNguyHiemMap] = useState<Map<string, number>>(new Map());
    const [dataRows, setDataRows] = useState<any[]>([]);
    const [dataMaxValue, setDataMaxValue] = useState<MaxValue[]>([]);
    const [dataColumns, setDataColumns] = useState<string[]>([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState<string | null>(null);
    const [exporting, setExporting] = useState(false);
    const tagIndex = { current: 0 };

    const [visible, setVisible] = useState({
        table: false,
        chart: true,
    });

    useEffect(() => {
        fetch("/NhietDo.xlsx")
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "buffer" });
                const sheet = workbook.Sheets[workbook.SheetNames[0]];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];
                const map = new Map<string, string>();
                const mapUnit = new Map<string, string>();
                const mapBao = new Map<string, number>();
                const mapNguyHiem = new Map<string, number>();
                rows.forEach(row => {
                    const tag = row[4];
                    const symbol = row[5];
                    const unit = row[6];
                    const bao = row[7];
                    const nguyHiem = row[8];
                    if (tag && symbol) map.set(tag.trim(), symbol.trim());
                    if (tag && unit) mapUnit.set(tag.trim(), unit.trim());
                    if (tag && bao) mapBao.set(tag, parseFloat(bao));
                    if (tag && nguyHiem) mapNguyHiem.set(tag, parseFloat(nguyHiem));

                });
                setTagSymbolMap(map);
                setTagUnitMap(mapUnit);
                setTagBaoMap(mapBao);
                setTagNguyHiemMap(mapNguyHiem);
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
        fetch(`${baseURL}/api/LBDO1VeVien/max-value`)
            .then(res => res.json())
            .then(data => {
                setDataMaxValue(data);

                // const times = data.map((time: any) => time.ThoiGian).filter(Boolean);
                // setDataColumns(times);
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


    useEffect(() => {
        const scheduleReload = () => {
            const now = new Date();

            // Mốc reload kế tiếp: hh:01:00
            const nextReload = new Date(now);
            nextReload.setMinutes(1, 0, 0); // phút 01, giây 00, ms 000

            // Nếu đã qua hh:01:00 của giờ hiện tại → sang giờ tiếp theo
            if (now >= nextReload) {
                nextReload.setHours(nextReload.getHours() + 1);
            }

            const delay = nextReload.getTime() - now.getTime();

            console.log(
                "🔄 Reload lúc:",
                nextReload.toLocaleTimeString("vi-VN")
            );

            return setTimeout(() => {
                window.location.reload();
            }, delay);
        };

        const timer = scheduleReload();

        return () => clearTimeout(timer);
    }, []);




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
            link.download = `BM.13-QT.05.03_NKVH_LocBuiMoiTruongPhoiLieu&DuoiMay1_${fromStr}_đến_${toStr}.xlsx`;
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
        console.log(label);
        const tag = tagSymbolMap.get(label) as string;
        const tagUnit = tagUnitMap.get(label);
        const tagBao = tagBaoMap.get(label);
        const nguyHiem = tagNguyHiemMap.get(label);

        const display = tagUnit || label;
        const values =
            tag
                ? dataMaxValue.find(
                    d => d.tagName === tag
                )?.giaTri ?? ""
                : "";


        const rowCells = [
            <td key={`${label}-symbol`} className="sticky left-[12.4rem] bg-white border px-2 py-1 text-xs">{tag}</td>,
            <td key={`${label}-tagBao`} className="sticky left-[17rem] bg-white border px-2 py-1 text-xs">{tagBao}</td>,
            <td key={`${label}-nguyHiem`} className="sticky left-[22.4rem] bg-white border px-2 py-1 text-xs">{nguyHiem}</td>,
            <td key={`${label}-nguyHiem`} className="sticky left-[24.4rem] bg-white border px-2 py-1 text-xs">{values}</td>
        ];
        const result: { [key: string]: any } = {
            [tag]: tagBao
        }
        const resultNguyHiem: { [key: string]: any } = {
            [tag]: nguyHiem
        }

        //console.log(result);
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

    const renderChartWithData = (label: string) => {
        const tag = tagSymbolMap.get(label);
        const tagUnit = tagUnitMap.get(label);
        const display = tagUnit || label;

        // const rowCells = [
        //     <td key={`${label}-symbol`} className="sticky left-[13rem] bg-white border px-2 py-1 text-xs">{display}</td>
        // ];

        // them du lieu vao
        for (const time of dataColumns) {
            const row = dataRows.find(r => r.ThoiGian == time);
            const value = tag ? row?.[tag] ?? "" : "";
            console.log(value);
            // rowCells.push(
            //     <td key={`${tag}-${time}`} className="border px-2 py-1 text-xs text-center">
            //         {value}
            //     </td>
            // );
        }

    };

    const renderNestedRows = (sections: SectionType[]): React.ReactNode[] => {
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
                        <td className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle">
                            {sec.name}
                        </td>
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

                                        className="sticky left-[0rem] bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                                    >
                                        {sec.name}
                                    </td>
                                )}
                                {tempRowCounter.current === 0 && (

                                    <td
                                        rowSpan={sectionRowCount}

                                        className="sticky left-[3.9rem] bg-white border px-2 py-1 font-semibold align-middle whitespace-nowrap"
                                    >
                                        {sec.section}
                                    </td>
                                )}
                                {index === 0 && (
                                    <td

                                        rowSpan={row.children?.length}
                                        className="sticky left-[7.0rem] bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                                    >
                                        {row.label}
                                    </td>
                                )}
                                <td className="sticky left-[9.8rem] bg-white border px-2 py-1">{label}</td>
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

                                    className="sticky left-[0rem] bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line"
                                >
                                    {sec.name}
                                </td>
                            )}

                            {tempRowCounter.current === 0 && (
                                <td
                                    rowSpan={sectionRowCount}
                                    className="sticky left-[3.9rem] bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line whitespace-nowrap"
                                >
                                    {sec.section}
                                </td>
                            )}
                            <td
                                className="sticky left-[7.0rem] bg-white font-semibold border px-2 py-1"
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
                                {visible.chart ? "Show Table" : "Show Chart"}
                            </button>
                    </div>
                    {/* Nút xuất file bên phải */}

                    {/* Tiêu đề và bộ lọc thời gian ở giữa */}
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-800 text-center">
                            Lọc Bụi Môi Trường Phối Liệu Và Đuôi Máy 1
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
                {visible.chart &&<FlowDashboardChart
                    rawData={dataRows}
                    TAG_CONFIG={TAG_CONFIG}
                />}
            </div>

        </section>
    );
}

export default NhietDo;
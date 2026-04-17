import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
import { useOutletContext } from "react-router-dom";
import clsx from "clsx";
import AlertMessage from "../../components/AlertMessage";
import Loading from "../../components/Loading";
import { DOLOMIT2_CONFIG, DOLOMIT2_SECTION } from "../../config/Dolomit2Config";
import FlowDashboardChart from "../../components/DashboardChart";
import usePosts from "../../hooks/usePosts";
import type { WarningHistoryConfig } from "../../config/WarningHistoryConfig";

type OutletContextType = { isSidebarOpen: boolean };

type MinValue = {
    id: number;
    tagName: string;
    thoiGian: string;
    giaTri: number;
};

const DongCoDolomit2: React.FC = () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const apiURL = baseURL + "/api/DongCoVoiXiMang";
    const { isSidebarOpen } = useOutletContext<OutletContextType>();
    const [tagSymbolMap, setTagSymbolMap] = useState<Map<string, string>>(new Map());
    const [tagUnitMap, setTagUnitMap] = useState<Map<string, string>>(new Map());
    const [nameMap, setNameMap] = useState<Map<string, string>>(new Map());
    const [locationMap, setLocationMap] = useState<Map<string, string>>(new Map());
    const [tagWarningMap, setTagWarningMap] = useState<Map<string, number>>(new Map());
    const [tagRiskyMap, setTagRiskyMap] = useState<Map<string, number>>(new Map());
    const [dataRows, setDataRows] = useState<any[]>([]);
    const [dataColumns, setDataColumns] = useState<string[]>([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [tagMinValue, setTagMinValue] = useState<MinValue[]>([]);
    const [warning, setWarning] = useState<string | null>(null);
    const tagIndex = { current: 0 };
    const sentWarningsRef = useRef<Set<string>>(new Set());
    const { createWarning } = usePosts();
    const [visible, setVisible] = useState({
        table: true,
        chart: false,
    });

    const triggerWarning = async (payload: WarningHistoryConfig, key: string) => {
        if (sentWarningsRef.current.has(key)) return;

        sentWarningsRef.current.add(key);

        try {
            await createWarning(payload);
        } catch (err: any) {
            // 🔥 Nếu bị duplicate từ backend (409) → ignore
            if (err?.message?.includes("409")) return;
            //console.error(err);
        }
    };

    useEffect(() => {
        fetch("/TagDongCoVoi.xlsx")
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: "buffer" });
                const sheet = workbook.Sheets[workbook.SheetNames[4]];
                const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];
                const map = new Map<string, string>();
                const mapUnit = new Map<string, string>();
                const mapWarning = new Map<string, number>();
                const mapRiskly = new Map<string, number>();
                const mapLocation = new Map<string, string>();
                const mapName = new Map<string, string>();
                rows.forEach(row => {
                    const location = row[0];
                    const name = row[1];
                    const tag = row[2];
                    const symbol = row[3];
                    const unit = row[4];
                    const warning = row[5];
                    const riskly = row[6];
                    if (tag && location) mapLocation.set(tag.trim(), location.trim());
                    if (tag && name) mapName.set(tag.trim(), name.trim());
                    if (tag && symbol) map.set(tag.trim(), symbol.trim());
                    if (tag && unit) mapUnit.set(tag.trim(), unit.trim());
                    if (tag && warning) mapWarning.set(tag, parseFloat(warning));
                    if (tag && riskly) mapRiskly.set(tag, parseFloat(riskly));
                });
                setLocationMap(mapLocation);
                setNameMap(mapName);
                setTagSymbolMap(map);
                setTagUnitMap(mapUnit);
                setTagWarningMap(mapWarning);
                setTagRiskyMap(mapRiskly);
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
        fetch(`${apiURL}/min-value`)
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
    const renderTagCellWithData = (label: string) => {
        const tag = tagSymbolMap.get(label) as string;
        const tagUnit = tagUnitMap.get(label) as string;
        const tagWarning = tagWarningMap.get(label);
        const tagRisky = tagRiskyMap.get(label);
        const tagName = nameMap.get(label) as string;
        const tagLocation = locationMap.get(label) as string;
        const display = tagUnit || label;
        const values =
            tag
                ? tagMinValue.find(
                    d => d.tagName === tag
                )?.giaTri ?? "⏳"
                : "⏳";

        const rowCells = [
            <td key={`${label}-symbol`} className="sticky left-[14rem] bg-white border px-2 py-1 text-xs">{display}</td>,
            <td key={`${label}-value`} className="sticky left-[18.6rem] bg-white border px-2 py-1 text-xs">{values}</td>,
            <td key={`${label}-warning`} className="sticky left-[26rem] bg-white border px-2 py-1 text-xs">{tagWarning}</td>,
            <td key={`${label}-risky`} className="sticky left-[32rem] bg-white border px-2 py-1 text-xs">{tagRisky}</td>
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
                const key = `${tag}-${time}`;
                const payload: WarningHistoryConfig = {
                    thoiGian: time,
                    tagName: tag,
                    khuVuc: tagLocation, // chỉnh theo logic của bạn
                    tenThongSo: tagName,
                    giaTri: Number(value),
                    trangThai: 2,
                    donVi: tagUnit
                };

                // gọi async nhưng không làm ảnh hưởng render
                triggerWarning(payload, key);
            }
            else if (isEqual) {
                cellClass += " bg-yellow-100 text-yellow-600"; // Giá trị trùng khớp (ví dụ: màu xanh lá)
                const key = `${tag}-${time}`;
                const payload: WarningHistoryConfig = {
                    thoiGian: time,
                    tagName: tag,
                    khuVuc: tagLocation, // chỉnh theo logic của bạn
                    tenThongSo: tagName,
                    giaTri: Number(value),
                    trangThai: 1,
                    donVi: tagUnit
                };

                // gọi async nhưng không làm ảnh hưởng render
                triggerWarning(payload, key);
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

        DOLOMIT2_SECTION.forEach(sec => {
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
                            Động Cơ Lò DOLOMIT 2
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
                {visible.table && <div className="border rounded-xl overflow-x-auto max-w-full  max-h-[60vh]">
                    <table className="min-w-full table-auto text-sm border-separate border border-gray-300 bg-white">
                        <thead className="bg-gray-100 text-gray-800 text-center sticky top-0 z-20">
                            <tr>
                                <th className="border px-4 py-2 sticky left-0 z-30 bg-gray-100">Mục</th>
                                <th className="border px-4 py-2 sticky left-[4rem] z-30 bg-gray-100 whitespace-nowrap" colSpan={3}>
                                    Vị trí đo / Thời gian
                                </th>
                                <th className="border px-4 py-2 sticky left-[14rem] z-30 bg-gray-100 whitespace-nowrap whitespace-nowrap">Đơn vị</th>
                                <th className="border px-4 py-2 sticky left-[18.6rem] z-30 bg-gray-100  whitespace-nowrap">MIN 3 Tháng</th>
                                <th className="border px-4 py-2 sticky left-[26rem] z-30 bg-gray-100 whitespace-nowrap">Cảnh báo</th>
                                <th className="border px-4 py-2 sticky left-[32rem] z-30 bg-gray-100 whitespace-nowrap">Nguy hiểm</th>
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
                </div>}
                {/* Bảng dữ liệu */}
                {visible.chart && <FlowDashboardChart
                    rawData={dataRows}
                    TAG_CONFIG={DOLOMIT2_CONFIG}
                />}

            </div>
            {loading && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
                    <Loading />
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

export default DongCoDolomit2;
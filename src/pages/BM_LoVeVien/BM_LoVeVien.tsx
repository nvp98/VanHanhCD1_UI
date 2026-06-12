import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useOutletContext } from "react-router-dom";
import clsx from "clsx";
import AlertMessage from "../../components/AlertMessage";
import Loading from "../../components/Loading";

type OutletContextType = { isSidebarOpen: boolean };


type ExtraRowType = {
  type: "temperature" | "pressure" | "flow" | "valve" | "single";
  title: string;
  labels: string[];
};

const sectionData = [
  {
    section: "Máy bản lược",
    rows: [
      { label: "Sấy 1", children: ["Trong khoang", "Hộp gió 1", "Hộp gió 2", "Hộp gió 3", "Hộp gió 4", "Hộp gió 5", "Hộp gió 6"] },
      { label: "Sấy 2", children: ["Trong khoang-1", "Trong khoang-2", "Trong khoang-3", "Hộp gió 7", "Hộp gió 8", "Hộp gió 9", "Hộp gió 10", "Hộp gió 11", "Hộp gió 12", "Hộp gió 13", "Hộp gió 14"] },
      { label: "Dự nhiệt 1", children: ["Trong khoang-1", "Trong khoang-2", "Trong khoang-3", "Hộp gió 15", "Hộp gió 16", "Hộp gió 17", "Hộp gió 18", "Hộp gió 19", "Hộp gió 20"] },
      { label: "Dự nhiệt 2", children: ["Trong khoang-1", "Trong khoang-2", "Trong khoang-3", "Trong khoang-4", "Hộp gió 21", "Hộp gió 22", "Hộp gió 23", "Hộp gió 24", "Hộp gió 25", "Hộp gió 26", "Hộp gió 27", "Hộp gió 28", "Hộp gió 29", "Hộp gió 30", "Hộp gió 31", "Hộp gió 32", "Hộp gió 33", "Hộp gió 34"] },
      { label: "Tốc độ (%)" },
      { label: "Tốc độ (m/phút)" },
      { label: "Chiều dày lớp liệu (mm)" }
    ]
  }
];

const extraRows: ExtraRowType[] = [
  { type: "temperature", title: "Lò quay", labels: ["Đầu lò", "Vùng nung", "Đuôi lò", "Tốc độ (%)", "Tốc độ (vòng/phút)"] },
  { type: "temperature", title: "Máy làm mát vòng", labels: ["Khoang 1", "Khoang 2", "Khoang 3", "Tốc độ (%)", "Tốc độ (m/phút)"] },
  {
    type: "pressure", title: "Áp suất (Kpa)", labels: [
      "Ống khí than LQ lớn", "Ống khí than LQ nhỏ", "Ống khí than DN1", "Ống gió trợ đốt LQ", "Ống gió trợ đốt DN1",
      "Đầu vào lọc bụi tĩnh điện", "Đầu ra lọc bụi tĩnh điện", "Nước đầu vào bản lược số 1", "Nước đầu vào bản lược số 2",
      "Nước đầu vào Lò quay số 1", "Nước đầu vào Lò quay số 2", "Bơm dầu thủy lực 1", "Bơm dầu thủy lực 2",
      "Đầu vào lọc bụi đa ống 1", "Đầu ra lọc bụi đa ống 1", "Đầu vào lọc bụi đa ống 2", "Đầu ra lọc bụi đa ống 2",
      "Khoang 2 LMV - DN1", "Khoang 3 LMV - Sấy 1", "Quạt số 1 LMV", "Quạt số 2 LMV", "Quạt số 3 LMV", "Quạt số 4 LMV",
      "Đường ống phun than", "Đầu lò quay", "Đuôi lò quay", "Can áp số 1 DN 2", "Can áp số 2 DN 2", "Can áp số 3 DN 2",
      "Can áp số 4 DN 2", "Can áp số 1 DN1", "Can áp số 2 DN1", "Can áp số 1 Sấy 2", "Can áp số 2 Sấy 2", "Can áp Sấy 1"
    ]
  },
  {
    type: "flow", title: "Lưu lượng (m3/h)", labels: [
      "Ống khí than LQ lớn", "Ống khí than LQ nhỏ", "Ống khí than DN1",
      "Ống gió trợ đốt LQ", "Ống gió trợ đốt DN1", "Đầu vào lọc bụi tĩnh điện",
      "Đầu ra lọc bụi tĩnh điện", "Đầu ra quạt thổi khô", "Quạt làm mát số 1",
      "Quạt làm mát số 2", "Quạt làm mát số 3", "Quạt làm mát số 4",
      "Đường ống phun than", "Đầu ra quạt lọc bụi đa ống 1", "Đầu ra quạt lọc bụi đa ống 2"
    ]
  },
  {
    type: "valve", title: "Độ mở van (%)", labels: [
      "Quạt gió trợ đốt", "Đầu vào quạt LB đa ống 1", "Đầu vào quạt LB đa ống 2",
      "Đầu vào quạt gió chính", "Đầu vào quạt thổi khô"
    ]
  },
  ...[
    "Quặng sống vào máy bản lược",
    "Thành phẩm (tấn/h)",
    "Than phun vào lò (tấn/h)",
    "Quặng sống",
    "Tổng quặng sống trong kíp (Tấn)",
    "Tổng quặng thành phẩm trong kíp (Tấn)"
  ].map(title => ({
    type: "single" as const,
    title,
    labels: [title]
  }))
];

const BM_LoVeVien: React.FC = () => {
  const { isSidebarOpen } = useOutletContext<OutletContextType>();
  const [tagSymbolMap, setTagSymbolMap] = useState<Map<string, string>>(new Map());
  const [dataRows, setDataRows] = useState<any[]>([]);
  const [dataColumns, setDataColumns] = useState<string[]>([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);
  useEffect(() => {
    fetch("/Tag.xlsx")
      .then(res => res.arrayBuffer())
      .then(buffer => {
        const workbook = XLSX.read(buffer, { type: "buffer" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];

        const map = new Map<string, string>();
        rows.forEach(row => {
          const tag = row[4];
          const symbol = row[5];
          if (tag && symbol) map.set(tag.trim(), symbol.trim());
        });
        setTagSymbolMap(map);
      });
  }, []);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/VeVien/last-24h`)
      .then(res => res.json())
      .then(data => {
        setDataRows(data);
        const timeList = data.map((d: any) => d.ThoiGian).filter(Boolean);
        setDataColumns(timeList);
      })
      .catch(error => {
        console.error("Lỗi khi gọi API VeVien:", error);
      });
  }, []);


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
    setLoading(true); // bắt đầu loading

    try {
      const res = await fetch(`${baseUrl}/api/VeVien/search?from=${from}&to=${to}`);
      const data = await res.json();

      setDataRows(data);
      const timeList = data.map((d: any) => d.ThoiGian).filter(Boolean);
      setDataColumns(timeList);
    } catch (err) {
      console.error("Lỗi khi tìm kiếm:", err);
    } finally {
      setLoading(false); // kết thúc loading
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
      const res = await fetch(`${baseUrl}/api/VeVien/export?from=${fromDate}&to=${toDate}`);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      // Format ngày
      const formatDate = (dateStr: string) => {
        const d = new Date(dateStr);
        const dd = d.getDate().toString().padStart(2, "0");
        const mm = (d.getMonth() + 1).toString().padStart(2, "0");
        const yyyy = d.getFullYear();
        return `${dd}-${mm}-${yyyy}`;
      };

      const fromStr = formatDate(fromDate);
      const toStr = formatDate(toDate);

      link.href = url;
      link.download = `BM.13-QT.05.03_NKVH_LoNungVeVien_${fromStr}_đến_${toStr}.xlsx`;
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



  const totalTempRows =
    sectionData.reduce((total, sec) =>
      total + sec.rows.reduce((sum, row) =>
        sum + (row.children ? row.children.length : 1), 0), 0
    ) +
    extraRows.filter(r => r.type === "temperature")
      .reduce((sum, r) => sum + r.labels.length, 0);

  const tempRowCounter = { current: 0 };
  const tagIndex = { current: 0 };

  const renderTagCellWithData = (label: string) => {
    const tag = tagSymbolMap.get(label); // tìm mã tag thực tế từ label
    const display = tag || label; // nếu không có tag, hiển thị label

    const rowCells = [
      <td key={`${label}-symbol`} className="sticky left-[12.5rem] bg-white border px-2 py-1 text-xs">{display}</td>
    ];

    for (const time of dataColumns) {
      const row = dataRows.find(r => r.ThoiGian === time);
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

    sectionData.forEach(sec => {
      const rowsWithChildren = sec.rows.filter(r => r.children);
      const rowsWithoutChildren = sec.rows.filter(r => !r.children);

      // Tính tổng số dòng của section để gộp cột section
      const sectionRowCount = rowsWithChildren.reduce(
        (sum, r) => sum + (r.children?.length || 1),
        0
      ) + rowsWithoutChildren.length;

      sec.rows.forEach((row) => {
        if (row.children && Array.isArray(row.children)) {
          row.children.forEach((label, i) => {
            const tag = `Tag${tagIndex.current++}`;
            rows.push(
              <tr key={`${sec.section}-${row.label}-${i}`} className="text-center text-xs hover:bg-white-50">
                {/* Cột "Mục" (Nhiệt độ) chỉ render 1 lần đầu */}
                {tempRowCounter.current === 0 && (
                  <td rowSpan={totalTempRows} className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle">
                    Nhiệt độ (℃)
                  </td>
                )}

                {/* Cột Section chỉ render 1 lần đầu tiên */}
                {tempRowCounter.current === 0 && (
                  <td rowSpan={sectionRowCount} className="sticky left-[3.8rem] bg-white border px-2 py-1 font-semibold align-middle">
                    {sec.section}
                  </td>
                )}

                {/* Cột Label (gộp) */}
                {i === 0 && (
                  <td rowSpan={row.children.length} className="sticky left-[6.4rem] bg-white border px-2 py-1 align-middle">
                    {row.label}
                  </td>
                )}

                {/* Cột vị trí đo */}
                <td className="sticky left-[9rem] bg-white border px-2 py-1">{label}</td>

                {/* Dữ liệu */}
                {renderTagCellWithData(tag)}
              </tr>
            );
            tempRowCounter.current++;
          });
        } else {
          const tag = `Tag${tagIndex.current++}`;
          rows.push(
            <tr key={`${sec.section}-${row.label}`} className="text-center text-xs hover:bg-white-50">
              {tempRowCounter.current === 0 && (
                <td rowSpan={totalTempRows} className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle">
                  Nhiệt độ (℃)
                </td>
              )}
              {tempRowCounter.current === 0 && (
                <td rowSpan={sectionRowCount} className="sticky left-[3.8rem] bg-white border px-2 py-1 font-semibold align-middle">
                  {sec.section}
                </td>
              )}
              <td className="sticky left-[6.4rem] bg-white border px-2 py-1 align-middle" colSpan={2}>
                {row.label}
              </td>
              {renderTagCellWithData(tag)}
            </tr>
          );
          tempRowCounter.current++;
        }

      });
    });

    return rows;
  };


  const renderExtraRows = (): React.ReactNode[] => {
    const rows: React.ReactNode[] = [];

    extraRows.forEach(({ type, title, labels }) => {
      if (type === "single") {
        const tag = `Tag${tagIndex.current++}`;
        rows.push(
          <tr key={title} className="text-center text-xs">
            <td className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle" colSpan={4}>{title}</td>
            {renderTagCellWithData(tag)}
          </tr>
        );
        return;
      }

      labels.forEach((label, i) => {
        const tag = `Tag${tagIndex.current++}`;
        const isFirst = i === 0;

        rows.push(
          <tr key={`${title}-${i}`} className="text-center text-xs">
            {type === "temperature" && tempRowCounter.current === 0 && (
              <td rowSpan={totalTempRows} className="sticky left-0 border px-2 py-1 font-semibold align-middle">Nhiệt độ (℃)</td>
            )}
            {isFirst && (
              <td rowSpan={labels.length} className="sticky left-0 bg-white border px-2 py-1 font-semibold align-middle whitespace-pre-line">
                {title}
              </td>
            )}
            <td colSpan={type === "temperature" ? 2 : 3} className="sticky left-[3.6rem] bg-white border px-2 py-1">{label}</td>
            {renderTagCellWithData(tag)}
          </tr>
        );

        if (type === "temperature") tempRowCounter.current++;
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

          {/* Tiêu đề và bộ lọc thời gian ở giữa */}
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Nhật ký vận hành Lò Vê Viên
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
                disabled={loading}>
                {loading ? "Đang tải..." : "🔍 Tìm kiếm"}
              </button>
            </div>
          </div>
        </div>


        {/* Bảng dữ liệu */}
        <div className="border rounded-xl overflow-x-auto max-w-full  max-h-[60vh]">
          <table className="min-w-full table-auto text-sm border-separate border border-gray-300 bg-white">
            <thead className="bg-gray-100 text-gray-800 text-center sticky top-0 z-20">
              <tr>
                <th className="border px-4 py-2 sticky left-0 z-30 bg-gray-100">Mục</th>
                <th className="border px-4 py-2 sticky left-[62px] z-30 bg-gray-100" colSpan={3}>
                  Vị trí đo / Thời gian
                </th>
                <th className="border px-4 py-2 sticky left-[12.5rem] z-30 bg-gray-100">Ký hiệu</th>
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
              {renderExtraRows()}
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



};

export default BM_LoVeVien;

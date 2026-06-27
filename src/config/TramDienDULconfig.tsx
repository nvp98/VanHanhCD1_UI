export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export type Rows = {
    label: string;
}
export type Sections = {
    section: string;
    rows: Rows[];
};

export const TUDOLUONGDAUVAO_35KV_CONFIG: ChartGroup[] = [
    {
        area: "Tủ liên lạc 10kV-HC01",
        tags: [
            { key: "TK_DUL35_YC294", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC109", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC110", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC111", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC112", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_DUL35_YC114", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Tủ đầu vào đo lường 35kV-H02",
        tags: [
            { key: "TK_DUL35_YC001", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_DUL35_YC002", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_DUL35_YC003", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_DUL35_YC004", label: "Điện Áp AB", color: "#eab308" },
            { key: "TK_DUL35_YC005", label: "Điện Áp BC", color: "#a855f7" },
            { key: "TK_DUL35_YC006", label: "Điện Áp CA", color: "#f59e0b" },
        ]
    },
    {
        area: "Tủ đầu vào đo lường 35kV-H04",
        tags: [
            { key: "TK_DUL35_YC015", label: "Dòng điện pha A", color: "#10b981" },
            { key: "TK_DUL35_YC016", label: "Dòng điện pha B", color: "#14b8a6" },
            { key: "TK_DUL35_YC017", label: "Dòng điện pha C", color: "#06b6d4" },
            { key: "TK_DUL35_YC018", label: "Điện Áp AB", color: "#f97316" },
            { key: "TK_DUL35_YC019", label: "Điện Áp BC", color: "#ef4444" },
            { key: "TK_DUL35_YC020", label: "Điện Áp CA", color: "#65a30d" },
        ]
    },
]
export const TUDOLUONGDAUVAO_35KV_SECTION: Sections[] = [
    {
        section: "Tủ liên lạc 10kV-HC01",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "Tủ đầu vào đo lường 35kV-H02",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Điện Áp AB" },
            { label: "Điện Áp BC" },
            { label: "Điện Áp CA" },
        ]
    },
    {
        section: "Tủ đầu vào đo lường 35kV-H04",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Điện Áp AB" },
            { label: "Điện Áp BC" },
            { label: "Điện Áp CA" },
        ]
    },
]

export const TUDAUVAO_MBA_CONFIG: ChartGroup[] = [
    {
        area: "MBA T1",
        tags: [
            { key: "TK_DUL35_YC007", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC008", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC009", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC010", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC011", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_DUL35_YC012", label: "Cosphi", color: "#84cc16" },
            { key: "TK_DUL35_YC013", label: "Công suất biểu kiến", color: "#22c55e" },
            { key: "TK_DUL35_YC269", label: "Nhiệt độ cuộn dây", color: "#f97316" },
            { key: "TK_DUL35_YC270", label: "Nhiệt độ dầu 1", color: "#ef4444" },
            { key: "TK_DUL35_YC271", label: "Nhiệt độ dầu 2", color: "#dc2626" },
            { key: "TK_DUL35_YC272", label: "Nhiệt độ dầu 3", color: "#b91c1c" },
        ]
    },
    {
        area: "MBA T2",
        tags: [
            { key: "TK_DUL35_YC021", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_DUL35_YC022", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_DUL35_YC023", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_DUL35_YC024", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_DUL35_YC025", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_DUL35_YC026", label: "Cosphi", color: "#f59e0b" },
            { key: "TK_DUL35_YC027", label: "Công suất biểu kiến", color: "#65a30d" },
            { key: "TK_DUL35_YC273", label: "Nhiệt độ cuộn dây", color: "#14b8a6" },
            { key: "TK_DUL35_YC274", label: "Nhiệt độ dầu 1", color: "#06b6d4" },
            { key: "TK_DUL35_YC275", label: "Nhiệt độ dầu 2", color: "#0284c7" },
            { key: "TK_DUL35_YC276", label: "Nhiệt độ dầu 3", color: "#0369a1" },
        ]
    },
]
export const TUDAUVAO_MBA_SECTION: Sections[] = [
    {
        section: "MBA T1",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
            { label: "Công suất biểu kiến" },
            { label: "Nhiệt độ cuộn dây" },
            { label: "Nhiệt độ dầu 1" },
            { label: "Nhiệt độ dầu 2" },
            { label: "Nhiệt độ dầu 3" },
        ]
    },
    {
        section: "MBA T2",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
            { label: "Công suất biểu kiến" },
            { label: "Nhiệt độ cuộn dây" },
            { label: "Nhiệt độ dầu 1" },
            { label: "Nhiệt độ dầu 2" },
            { label: "Nhiệt độ dầu 3" },
        ]
    },
]

export const TUDAUVAO_10KV_CONFIG: ChartGroup[] = [
    {
        area: "Lộ 1-HC03",
        tags: [
            { key: "TK_DUL35_YC117", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC118", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC119", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC120", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC122", label: "Cosphi", color: "#0891b2" },
        ]
    },
    {
        area: "Lộ 2-HD03",
        tags: [
            { key: "TK_DUL35_YC300", label: "Điện Áp Thanh Cái", color: "#ec4899" },
            { key: "TK_DUL35_YC197", label: "Dòng điện pha A", color: "#be123c" },
            { key: "TK_DUL35_YC198", label: "Dòng điện pha B", color: "#dc2626" },
            { key: "TK_DUL35_YC199", label: "Dòng điện pha C", color: "#eab308" },
            { key: "TK_DUL35_YC200", label: "Công suất tác dụng", color: "#a855f7" },
            { key: "TK_DUL35_YC202", label: "Cosphi", color: "#f59e0b" },
        ]
    },
]

export const TUDAUVAO_10KV_SECTION: Sections[] = [
    {
        section: "LỘ 1-HC03",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2-HD03",
        rows: [
            { label: "Điện Áp Thanh Cái" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
]

export const TUMAYCAT_MBA_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1-HC11",
        tags: [
            { key: "TK_DUL35_YC181", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC182", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC183", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC184", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC186", label: "Cosphi", color: "#0891b2" },
        ]
    },
    {
        area: "LỘ 2-HD11",
        tags: [
            { key: "TK_DUL35_YC261", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_DUL35_YC262", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_DUL35_YC263", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_DUL35_YC264", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_DUL35_YC266", label: "Cosphi", color: "#a855f7" },
        ]
    },
]

export const TUMAYCAT_MBA_SECTION: Sections[] = [
    {
        section: "LỘ 1-HC11",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2-HD11",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
]

export const VOI_35KV_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1-HC04",
        tags: [
            { key: "TK_DUL35_YC125", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC126", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC127", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC128", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC130", label: "Cosphi", color: "#0891b2" },
        ]
    },
    {
        area: "LỘ 2-HD04",
        tags: [
            { key: "TK_DUL35_YC205", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_DUL35_YC206", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_DUL35_YC207", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_DUL35_YC208", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_DUL35_YC210", label: "Cosphi", color: "#a855f7" },
        ]
    },
]

export const VOI_35KV_SECTION: Sections[] = [
    {
        section: "LỘ 1-HC04",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2-HD04",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
]

export const NMNL_35KV_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1-HC06",
        tags: [
            { key: "TK_DUL35_YC141", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC142", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC143", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC144", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC146", label: "Cosphi", color: "#0891b2" },
        ]
    },
    {
        area: "LỘ 2-HD05",
        tags: [
            { key: "TK_DUL35_YC213", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_DUL35_YC214", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_DUL35_YC215", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_DUL35_YC216", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_DUL35_YC218", label: "Cosphi", color: "#a855f7" },
        ]
    },
]

export const NMNL_35KV_SECTION: Sections[] = [
    {
        section: "LỘ 1-HC06",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2-HC05",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
]

export const NGHIENXI2_35KV_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1-HC07",
        tags: [
            { key: "TK_DUL35_YC149", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC150", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC151", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC152", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC154", label: "Cosphi", color: "#0891b2" },
        ]
    },
    {
        area: "LỘ 2-HD06",
        tags: [
            { key: "TK_DUL35_YC221", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_DUL35_YC222", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_DUL35_YC223", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_DUL35_YC224", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_DUL35_YC226", label: "Cosphi", color: "#a855f7" },
        ]
    },
]

export const NGHIENXI2_35KV_SECTION: Sections[] = [
    {
        section: "LỘ 1-HC07",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2-HD06",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
]

export const DUPHONG_35KV_CONFIG: ChartGroup[] = [
    {
        area: "Lộ 1 SPARE-HC08",
        tags: [
            { key: "TK_DUL35_YC157", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC158", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC159", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC160", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC162", label: "Cosphi", color: "#0891b2" },
        ]
    },
    {
        area: "Lộ 1 SPARE-HC09",
        tags: [
            { key: "TK_DUL35_YC165", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC166", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC167", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC168", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC170", label: "Cosphi", color: "#0891b2" },
        ]
    },
    {
        area: "Lộ 1 SPARE-HC10",
        tags: [
            { key: "TK_DUL35_YC173", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC174", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC175", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC176", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC178", label: "Cosphi", color: "#0891b2" },
        ]
    },
    {
        area: "Lộ 1 SPARE-HD07",
        tags: [
            { key: "TK_DUL35_YC229", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_DUL35_YC230", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_DUL35_YC231", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_DUL35_YC232", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_DUL35_YC234", label: "Cosphi", color: "#0891b2" },
        ]
    },
    {
        area: "Lộ 2 SPARE-HD08",
        tags: [
            { key: "TK_DUL35_YC237", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_DUL35_YC238", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_DUL35_YC239", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_DUL35_YC240", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_DUL35_YC242", label: "Cosphi", color: "#a855f7" },
        ]
    },
    {
        area: "Lộ 2 SPARE-HD09",
        tags: [
            { key: "TK_DUL35_YC245", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_DUL35_YC246", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_DUL35_YC247", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_DUL35_YC248", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_DUL35_YC250", label: "Cosphi", color: "#a855f7" },
        ]
    },
    {
        area: "Lộ 2 SPARE-HD10",
        tags: [
            { key: "TK_DUL35_YC253", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_DUL35_YC254", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_DUL35_YC255", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_DUL35_YC256", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_DUL35_YC258", label: "Cosphi", color: "#a855f7" },
        ]
    },
]

export const DUPHONG_35KV_SECTION: Sections[] = [
    {
        section: "Lộ 1 SPARE-HC08",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "Lộ 1 SPARE-HC09",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
     {
        section: "Lộ 1 SPARE-HC10",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
     {
        section: "Lộ 1 SPARE-HD07",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
     {
        section: "Lộ 2 SPARE-HD08",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
     {
        section: "Lộ 2 SPARE-HD09",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "Lộ 2 SPARE-HD10",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Cosphi" },
        ]
    },
    
]




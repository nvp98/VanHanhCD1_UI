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
        area: "Tủ đo lường đầu vào 35kV-SA02",
        tags: [
            { key: "TK_TK35_YC091", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC092", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC093", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC094", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC095", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC096", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Tủ đo lường đầu vào 35kV-SB02",
        tags: [
            { key: "TK_TK35_YC127", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC128", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC129", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC130", label: "Điện Áp AB", color: "#ef4444" },
            { key: "TK_TK35_YC131", label: "Điện Áp BC", color: "#f97316" },
            { key: "TK_TK35_YC132", label: "Điện Áp CA", color: "#f59e0b" },
        ]
    },
]

export const TUDOLUONGDAUVAO_35KV_SECTION: Sections[] = [
    {
        section: "Tủ đo lường đầu vào 35kV-SA02",
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
        section: "Tủ đo lường đầu vào 35kV-SB02",
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

export const TUDAUVAO_TC_10KV_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1 - HA04",
        tags: [
            { key: "TK_TK35_YC031", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC032", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC033", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC034", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC035", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC036", label: "Cosphi", color: "#84cc16" },
            { key: "TK_TK35_YC151", label: "Nhiệt độ cuộn dây", color: "#ef4444" },
            { key: "TK_TK35_YC152", label: "Nhiệt độ dầu 1", color: "#f97316" },
            { key: "TK_TK35_YC153", label: "Nhiệt độ dầu 2", color: "#f59e0b" },
        ]
    },
    {
        area: "LỘ 2 - HB08",
        tags: [
            { key: "TK_TK35_YC079", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC080", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC081", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC082", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC083", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC084", label: "Cosphi", color: "#f59e0b" },
            { key: "TK_TK35_YC154", label: "Nhiệt độ cuộn dây", color: "#ef4444" },
            { key: "TK_TK35_YC155", label: "Nhiệt độ dầu 1", color: "#f97316" },
            { key: "TK_TK35_YC156", label: "Nhiệt độ dầu 2", color: "#eab308" },
        ]
    },
]

export const TUDAUVAO_TC_10KV_SECTION: Sections[] = [
    {
        section: "LỘ 1 - HA04",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
            { label: "Nhiệt độ cuộn dây" },
            { label: "Nhiệt độ dầu 1" },
            { label: "Nhiệt độ dầu 2" },
        ]
    },
    {
        section: "LỘ 2 - HB08",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
            { label: "Nhiệt độ cuộn dây" },
            { label: "Nhiệt độ dầu 1" },
            { label: "Nhiệt độ dầu 2" },
        ]
    },
]

export const TULIENLAC_TUDOLUONG_CONFIG: ChartGroup[] = [
    {
        area: "Tủ MC liên lạc-HA01",
        tags: [
            { key: "TK_TK35_YC043", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC044", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC045", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC046", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC047", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC048", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Tủ đo lường lộ 1-HA02",
        tags: [
            { key: "TK_TK35_YC133", label: "Điện Áp A", color: "#3b82f6" },
            { key: "TK_TK35_YC134", label: "Điện Áp B", color: "#06b6d4" },
            { key: "TK_TK35_YC135", label: "Điện Áp C", color: "#14b8a6" },
        ]
    },
    {
        area: "Tủ đo lường lộ 2-HB02",
        tags: [
            { key: "TK_TK35_YC145", label: "Điện Áp A", color: "#ef4444" },
            { key: "TK_TK35_YC146", label: "Điện Áp B", color: "#f97316" },
            { key: "TK_TK35_YC147", label: "Điện Áp C", color: "#f59e0b" },
        ]
    },
]

export const TULIENLAC_TUDOLUONG_SECTION: Sections[] = [
    {
        section: "Tủ MC liên lạc-HA01",
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
        section: "Tủ đo lường lộ 1-HA02",
        rows: [
            { label: "Điện Áp pha A" },
            { label: "Điện Áp pha B" },
            { label: "Điện Áp pha C" },
        ]
    },
    {
        section: "Tủ đo lường lộ 2-HB02",
        rows: [
            { label: "Điện Áp pha A" },
            { label: "Điện Áp pha B" },
            { label: "Điện Áp pha C" },
        ]
    },
]

export const TRAMDIEN35KV_THIEUKET1_CONFIG: ChartGroup[] = [
    {
        area: "Lộ 1 - HA03",
        tags: [
            { key: "TK_TK35_YC037", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC038", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC039", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC040", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC041", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC042", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Lộ 2 - HB03",
        tags: [
            { key: "TK_TK35_YC049", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC050", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC051", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC052", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC053", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC054", label: "Cosphi", color: "#f59e0b" },
        ]
    },
]

export const TRAMDIEN35KV_THIEUKET1_SECTION: Sections[] = [
    {
        section: "LỘ 1 - HA03",
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
        section: "LỘ 2 - HB03",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
        ]
    },
]

export const TRAMDIEN35KV_THIEUKET2_CONFIG: ChartGroup[] = [
    {
        area: "Lộ 1 - HA05",
        tags: [
            { key: "TK_TK35_YC025", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC026", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC027", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC028", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC029", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC030", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Lộ 2 - HB04",
        tags: [
            { key: "TK_TK35_YC055", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC056", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC057", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC058", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC059", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC060", label: "Cosphi", color: "#f59e0b" },
        ]
    },
]

export const TRAMDIEN35KV_THIEUKET2_SECTION: Sections[] = [
    {
        section: "LỘ 1 - HA05",
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
        section: "LỘ 2 - HB04",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
        ]
    },
]

export const TRAMDIEN35KV_VEVIEN_CONFIG: ChartGroup[] = [
    {
        area: "Lộ 1 - HA06",
        tags: [
            { key: "TK_TK35_YC019", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC020", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC021", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC022", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC023", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC024", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Lộ 2 - HB05",
        tags: [
            { key: "TK_TK35_YC061", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC062", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC063", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC064", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC065", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC066", label: "Cosphi", color: "#f59e0b" },
        ]
    },
]

export const TRAMDIEN35KV_VEVIEN_SECTION: Sections[] = [
    {
        section: "LỘ 1 - HA06",
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
        section: "LỘ 2 - HB05",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
        ]
    },
]

export const TRAMDIEN35KV_KHUS_CONFIG: ChartGroup[] = [
    {
        area: "Lộ 1 khử S-HA08",
        tags: [
            { key: "TK_TK35_YC007", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC008", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC009", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC010", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC011", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC012", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Lộ 2 Khử S-HB07",
        tags: [
            { key: "TK_TK35_YC073", label: "Dòng điện pha A", color: "#c93d83" },
            { key: "TK_TK35_YC074", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC075", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC076", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC077", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC078", label: "Cosphi", color: "#f59e0b" },
        ]
    },
]

export const TRAMDIEN35KV_KHUS_SECTION: Sections[] = [
    {
        section: "LỘ 1 - HA08",
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
        section: "LỘ 2 - HB07",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
        ]
    },
]

export const TRAMDIEN35KV_KHUKHIKHOI_CONFIG: ChartGroup[] = [
    {
        area: "Lộ 1 - HA11",
        tags: [
            { key: "TK_TK35_YC109", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC110", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC111", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC112", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC113", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC114", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Lộ 2 - HB11",
        tags: [
            { key: "TK_TK35_YC121", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC122", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC123", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC124", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC125", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC126", label: "Cosphi", color: "#f59e0b" },
        ]
    },
]

export const TRAMDIEN35KV_KHUKHIKHOI_SECTION: Sections[] = [
    {
        section: "LỘ 1 - HA11",
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
        section: "LỘ 2 - HB11",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
        ]
    },
]

export const TRAMDIEN35KV_SUB1_CONFIG: ChartGroup[] = [
    {
        area: "Lộ 1 - HA10",
        tags: [
            { key: "TK_TK35_YC103", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC104", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC105", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC106", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC107", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC108", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Lộ 2 - HB10",
        tags: [
            { key: "TK_TK35_YC115", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC116", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC117", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC118", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC119", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC120", label: "Cosphi", color: "#f59e0b" },
        ]
    },
]

export const TRAMDIEN35KV_SUB1_SECTION: Sections[] = [
    {
        section: "LỘ 1 - HA10",
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
        section: "LỘ 2 - HB10",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
        ]
    },
]

export const TUDAUVAO_MBA_CONFIG: ChartGroup[] = [
    {
        area: "Tủ đầu vào MBA T1 35/10kV-SB01",
        tags: [
            { key: "TK_TK35_YC097", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC098", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC099", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC100", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC101", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC102", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Tủ đầu vào MBA T2 35/10kV-SB02",
        tags: [
            { key: "TK_TK35_YC139", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC140", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC141", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC142", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC143", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC144", label: "Cosphi", color: "#f59e0b" },
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
        ]
    },
]

export const MBA_TIEPDIA_CONFIG: ChartGroup[] = [
    {
        area: "MBA tiếp địa lộ 1-HA09",
        tags: [
            { key: "TK_TK35_YC001", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC002", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC003", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC004", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC005", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC006", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "MBA tiếp địa lộ 2-HB09",
        tags: [
            { key: "TK_TK35_YC085", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC086", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC087", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC088", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC089", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC090", label: "Cosphi", color: "#f59e0b" },
        ]
    },
]

export const MBA_TIEPDIA_SECTION: Sections[] = [
    {
        section: "LỘ 1 - HA09",
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
        section: "LỘ 2 - HB09",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
        ]
    },
]

export const TUDUPHONG_CONFIG: ChartGroup[] = [
    {
        area: "Dự phòng-HA07",
        tags: [
            { key: "TK_TK35_YC013", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "TK_TK35_YC014", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "TK_TK35_YC015", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "TK_TK35_YC016", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "TK_TK35_YC017", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "TK_TK35_YC018", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "Dự phòng- HB06",
        tags: [
            { key: "TK_TK35_YC067", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "TK_TK35_YC068", label: "Dòng điện pha B", color: "#be123c" },
            { key: "TK_TK35_YC069", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "TK_TK35_YC070", label: "Công suất tác dụng", color: "#eab308" },
            { key: "TK_TK35_YC071", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "TK_TK35_YC072", label: "Cosphi", color: "#f59e0b" },
        ]
    },
]

export const TUDUPHONG_SECTION: Sections[] = [
    {
        section: "Dự phòng-HA07",
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
        section: "Dự phòng- HB06",
        rows: [
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Cosphi" },
        ]
    },
]



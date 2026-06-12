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


export const TUDIEN35KV_NMNL_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1",
        tags: [
            { key: "T35_HA07_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "T35_HA07_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "T35_HA07_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "T35_HA07_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "T35_HA07_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "T35_HA07_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "T35_HA07_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "T35_HA07_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "T35_HA07_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "T35_HA07_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "T35_HA07_Fre", label: "Tần số", color: "#22c55e" },
            { key: "T35_HA07_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "LỘ 2",
        tags: [
            { key: "T35_HB06_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "T35_HB06_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "T35_HB06_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "T35_HB06_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "T35_HB06_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "T35_HB06_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "T35_HB06_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "T35_HB06_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "T35_HB06_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "T35_HB06_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "T35_HB06_Fre", label: "Tần số", color: "#ec4899" },
            { key: "T35_HB06_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },
];

export const TUDIEN35KV_NMNL_SECTION: Sections[] = [
    {
        section: "LỘ 1",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]

export const TUDIEN_DAUVAO_BAILIEU1_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1",
        tags: [
            { key: "T35_HA05_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "T35_HA05_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "T35_HA05_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "T35_HA05_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "T35_HA05_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "T35_HA05_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "T35_HA05_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "T35_HA05_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "T35_HA05_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "T35_HA05_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "T35_HA05_Fre", label: "Tần số", color: "#22c55e" },
            { key: "T35_HA05_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "LỘ 2",
        tags: [
            { key: "T35_HB05_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "T35_HB05_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "T35_HB05_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "T35_HB05_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "T35_HB05_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "T35_HB05_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "T35_HB05_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "T35_HB05_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "T35_HB05_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "T35_HB05_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "T35_HB05_Fre", label: "Tần số", color: "#ec4899" },
            { key: "T35_HB05_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },
];

export const TUDIEN_DAUVAO_BAILIEU1_SECTION: Sections[] = [
    {
        section: "LỘ 1",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]

export const TUDIEN_DAUVAO_BAILIEU2_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1",
        tags: [
            { key: "T35_HA04_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "T35_HA04_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "T35_HA04_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "T35_HA04_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "T35_HA04_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "T35_HA04_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "T35_HA04_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "T35_HA04_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "T35_HA04_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "T35_HA04_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "T35_HA04_Fre", label: "Tần số", color: "#22c55e" },
            { key: "T35_HA04_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "LỘ 2",
        tags: [
            { key: "T35_HB04_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "T35_HB04_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "T35_HB04_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "T35_HB04_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "T35_HB04_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "T35_HB04_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "T35_HB04_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "T35_HB04_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "T35_HB04_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "T35_HB04_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "T35_HB04_Fre", label: "Tần số", color: "#ec4899" },
            { key: "T35_HB04_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },

];

export const TUDIEN_DAUVAO_BAILIEU2_SECTION: Sections[] = [
    {
        section: "LỘ 1",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]

export const TUDIEN_DAUVAO_CAUCANG_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1",
        tags: [
            { key: "T35_HA03_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "T35_HA03_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "T35_HA03_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "T35_HA03_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "T35_HA03_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "T35_HA03_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "T35_HA03_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "T35_HA03_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "T35_HA03_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "T35_HA03_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "T35_HA03_Fre", label: "Tần số", color: "#22c55e" },
            { key: "T35_HA03_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "LỘ 2",
        tags: [
            { key: "T35_HB03_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "T35_HB03_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "T35_HB03_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "T35_HB03_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "T35_HB03_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "T35_HB03_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "T35_HB03_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "T35_HB03_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "T35_HB03_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "T35_HB03_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "T35_HB03_Fre", label: "Tần số", color: "#ec4899" },
            { key: "T35_HB03_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },

];

export const TUDIEN_DAUVAO_CAUCANG_SECTION: Sections[] = [
    {
        section: "LỘ 1",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]

export const TUDIEN_DAUVAO_CANGMORONG_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 1",
        tags: [
            { key: "T35_HA06_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "T35_HA06_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "T35_HA06_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "T35_HA06_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "T35_HA06_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "T35_HA06_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "T35_HA06_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "T35_HA06_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "T35_HA06_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "T35_HA06_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "T35_HA06_Fre", label: "Tần số", color: "#22c55e" },
            { key: "T35_HA06_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "LỘ 2",
        tags: [
            { key: "T35_HB07_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "T35_HB07_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "T35_HB07_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "T35_HB07_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "T35_HB07_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "T35_HB07_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "T35_HB07_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "T35_HB07_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "T35_HB07_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "T35_HB07_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "T35_HB07_Fre", label: "Tần số", color: "#ec4899" },
            { key: "T35_HB07_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },

];

export const TUDIEN_DAUVAO_CANGMORONG_SECTION: Sections[] = [
    {
        section: "LỘ 1",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "LỘ 2",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]

export const MAYCAT_BAILIEU1_CONFIG: ChartGroup[] = [
    {
        area: "MÁY CẮT",
        tags: [
            { key: "BL1_AHA01_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "BL1_AHA01_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "BL1_AHA01_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "BL1_AHA01_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "BL1_AHA01_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "BL1_AHA01_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "BL1_AHA01_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "BL1_AHA01_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "BL1_AHA01_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "BL1_AHA01_kVAr", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "BL1_AHA01_Fre", label: "Tần số", color: "#22c55e" },
            { key: "BL1_AHA01_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
];

export const MAYCAT_BAILIEU1_SECTION: Sections[] = [
    {
        section: "MÁY CẮT",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]

export const MAYCAT_BAILIEU2_CONFIG: ChartGroup[] = [
    {
        area: "MÁY CẮT",
        tags: [
            { key: "BL2_BHA01_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "BL2_BHA01_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "BL2_BHA01_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "BL2_BHA01_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "BL2_BHA01_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "BL2_BHA01_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "BL2_BHA01_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "BL2_BHA01_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "BL2_BHA01_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "BL2_BHA01_kVAr", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "BL2_BHA01_Fre", label: "Tần số", color: "#22c55e" },
            { key: "BL2_BHA01_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },

];

export const MAYCAT_BAILIEU2_SECTION: Sections[] = [
    {
        section: "MÁY CẮT",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]

export const MAYCAT_CAUCANG_CONFIG: ChartGroup[] = [
    {
        area: "MÁY CẮT",
        tags: [
            { key: "CC_THA01_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "CC_THA01_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "CC_THA01_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "CC_THA01_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "CC_THA01_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "CC_THA01_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "CC_THA01_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "CC_THA01_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "CC_THA01_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "CC_THA01_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "CC_THA01_Fre", label: "Tần số", color: "#22c55e" },
            { key: "CC_THA01_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },

];

export const MAYCAT_CAUCANG_SECTION: Sections[] = [
    {
        section: "MÁY CẮT",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]

export const MAYCAT_CANGMORONG_CONFIG: ChartGroup[] = [
    {
        area: "MÁY CẮT",
        tags: [
            { key: "CMR_1AH11_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "CMR_1AH11_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "CMR_1AH11_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "CMR_1AH11_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "CMR_1AH11_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "CMR_1AH11_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "CMR_1AH11_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "CMR_1AH11_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "CMR_1AH11_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "CMR_1AH11_kVAr", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "CMR_1AH11_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },

];

export const MAYCAT_CANGMORONG_SECTION: Sections[] = [
    {
        section: "MÁY CẮT",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Cosphi" },
        ]
    },
]

export const MAYCAT_35KV_CONFIG: ChartGroup[] = [
    {
        area: "MÁY CẮT",
        tags: [
            { key: "T35_HA01_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "T35_HA01_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "T35_HA01_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "T35_HA01_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "T35_HA01_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "T35_HA01_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "T35_HA01_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "T35_HA01_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "T35_HA01_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "T35_HA01_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "T35_HA01_Fre", label: "Tần số", color: "#22c55e" },
            { key: "T35_HA01_PF", label: "Cosphi", color: "#84cc16" },
        ]
    }

];

export const MAYCAT_35KV_SECTION: Sections[] = [
    {
        section: "MÁY CẮT",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    }
]

export const TUXUAT_S95_CONFIG: ChartGroup[] = [
    {
        area: "LỘ 2",
        tags: [
            { key: "CMR_1AH4_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "CMR_1AH4_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "CMR_1AH4_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "CMR_1AH4_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "CMR_1AH4_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "CMR_1AH4_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "CMR_1AH4_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "CMR_1AH4_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "CMR_1AH4_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "CMR_1AH4_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "CMR_1AH4_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },

];

export const TUXUAT_S95_SECTION: Sections[] = [
    {
        section: "TỦ XUẤT TUYẾN",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Cosphi" },
        ]
    },
]

export const TUDC_KHINEN_CONFIG: ChartGroup[] = [
    {
        area: "TỦ ĐC",
        tags: [
            { key: "CC_THB14_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "CC_THB14_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "CC_THB14_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "CC_THB14_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "CC_THB14_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "CC_THB14_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "CC_THB14_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "CC_THB14_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "CC_THB14_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "CC_THB14_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "CC_THB14_Fre", label: "Tần số", color: "#ec4899" },
            { key: "CC_THB14_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },

];

export const TUDC_KHINEN_SECTION: Sections[] = [
    {
        section: "TỦ ĐC",
        rows: [
            { label: "Điện áp pha A" },
            { label: "Điện áp pha B" },
            { label: "Điện áp pha C" },
            { label: "Dòng điện pha A" },
            { label: "Dòng điện pha B" },
            { label: "Dòng điện pha C" },
            { label: "Công suất tác dụng" },
            { label: "Công suất phản kháng" },
            { label: "Điện năng tác dụng" },
            { label: "Điện năng phản kháng" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]
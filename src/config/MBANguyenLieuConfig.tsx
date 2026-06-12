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


export const MBA35KV_NMNL_CONFIG: ChartGroup[] = [
    {
        area: "MBA T1",
        tags: [
            { key: "T35_SA01_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "T35_SA01_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "T35_SA01_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "T35_SA01_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "T35_SA01_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "T35_SA01_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "T35_SA01_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "T35_SA01_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "T35_SA01_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "T35_SA01_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },

            { key: "T35_SA02_Uab", label: "Tủ đo lường điện áp pha A", color: "#22c55e" },
            { key: "T35_SA02_Ubc", label: "Tủ đo lường điện áp pha B", color: "#84cc16" },
            { key: "T35_SA02_Uca", label: "Tủ đo lường điện áp pha C", color: "#85409D" },
            { key: "T35_SA02_Fre", label: "Tủ đo lường tần số", color: "#fd6233ff" },

            { key: "T35_T1_OT1", label: "Nhiệt độ dầu 1", color: "#FF0000" },
            { key: "T35_T1_OT2", label: "Nhiệt độ dầu 2", color: "#393D7E" },
            { key: "T35_T1_WT", label: "Nhiệt độ cuộn dây", color: "#FF6D1F" },

            { key: "T35_SA01_Fre", label: "Tần số", color: "#6366f1" },
            { key: "T35_SA01_PF", label: "Cosphi", color: "#7132CA" },
        ]
    },
    {
        area: "MBA T2",
        tags: [
            { key: "T35_SB01_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "T35_SB01_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "T35_SB01_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "T35_SB01_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "T35_SB01_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "T35_SB01_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "T35_SB01_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "T35_SB01_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "T35_SB01_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "T35_SB01_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },

            { key: "T35_SB02_Uab", label: "Tủ đo lường điện áp pha A", color: "#ec4899" },
            { key: "T35_SB02_Ubc", label: "Tủ đo lường điện áp pha B", color: "#f59e0b" },
            { key: "T35_SB02_Uca", label: "Tủ đo lường điện áp pha C", color: "#842A3B" },
            { key: "T35_SB02_Fre", label: "Tủ đo lường tần số", color: "#842A3B" },

            { key: "T35_T2_OT1", label: "Nhiệt độ dầu 1", color: "#800017ff" },
            { key: "T35_T2_OT2", label: "Nhiệt độ dầu 2", color: "#FF0000" },
            { key: "T35_T2_WT", label: "Nhiệt độ cuộn dây", color: "#" },

            { key: "T35_SB01_Fre", label: "Tần số", color: "#63c9f1ff" },
            { key: "T35_SB01_PF", label: "Cosphi", color: "#FD7979" },
        ]
    }

];

export const MBA35KV_NMNL_SECTION: Sections[] = [
    {
        section: "MBA T1",
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
            { label: "Tủ đo lường điện áp pha A" },
            { label: "Tủ đo lường điện áp pha B" },
            { label: "Tủ đo lường điện áp pha C" },
            { label: "Tủ đo lường tần số" },
            { label: "Nhiệt độ dầu 1" },
            { label: "Nhiệt độ dầu 2" },
            { label: "Nhiệt độ cuộn dây" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "MBA T2",
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
            { label: "Tủ đo lường điện áp pha A" },
            { label: "Tủ đo lường điện áp pha B" },
            { label: "Tủ đo lường điện áp pha C" },
            { label: "Tủ đo lường tần số" },
            { label: "Nhiệt độ dầu 1" },
            { label: "Nhiệt độ dầu 2" },
            { label: "Nhiệt độ cuộn dây" },
            { label: "Tần số" },
            { label: "Cosphi" },
        ]
    },
]

export const MBA10KV_NLOT_CONFIG: ChartGroup[] = [
    {
        area: "MBA T1",
        tags: [
            { key: "BL1_AHA07_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "BL1_AHA07_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "BL1_AHA07_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "BL1_AHA07_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "BL1_AHA07_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "BL1_AHA07_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "BL1_AHA07_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "BL1_AHA07_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "BL1_AHA07_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "BL1_AHA07_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "BL1_AHA07_Fre", label: "Tần số", color: "#22c55e" },
            { key: "BL1_AHA07_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "MBA T2",
        tags: [
            { key: "BL1_AHB07_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "BL1_AHB07_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "BL1_AHB07_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "BL1_AHB07_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "BL1_AHB07_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "BL1_AHB07_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "BL1_AHB07_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "BL1_AHB07_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "BL1_AHB07_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "BL1_AHB07_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "BL1_AHB07_Fre", label: "Tần số", color: "#ec4899" },
            { key: "BL1_AHB07_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },
];
export const MBA10KV_NLOT_SECTION: Sections[] = [
    {
        section: "MBA T1",
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
        section: "MBA T2",
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

export const MBA10KV_SUB4_CONFIG: ChartGroup[] = [
    {
        area: "MBA T1",
        tags: [
            { key: "BL1_AHB18_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "BL1_AHB18_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "BL1_AHB18_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "BL1_AHB18_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "BL1_AHB18_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "BL1_AHB18_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "BL1_AHB18_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "BL1_AHB18_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "BL1_AHB18_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "BL1_AHB18_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "MBA T2",
        tags: [
            { key: "BL1_AHB17_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "BL1_AHB17_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "BL1_AHB17_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "BL1_AHB17_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "BL1_AHB17_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "BL1_AHB17_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "BL1_AHB17_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "BL1_AHB17_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "BL1_AHB17_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "BL1_AHB17_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "BL1_AHB17_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },
];
export const MBA10KV_SUB4_SECTION: Sections[] = [
    {
        section: "MBA T1",
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
            { label: "Cosphi" },
        ]
    },
    {
        section: "MBA T2",
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

export const MBA10KV_KHINEN_CONFIG: ChartGroup[] = [
    {
        area: "MBA T1",
        tags: [
            { key: "CC_THA13_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "CC_THA13_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "CC_THA13_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "CC_THA13_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "CC_THA13_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "CC_THA13_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "CC_THA13_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "CC_THA13_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "CC_THA13_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "CC_THA13_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "CC_THA13_Fre", label: "Tần số", color: "#22c55e" },
            { key: "CC_THA13_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "MBA T2",
        tags: [
            { key: "CC_THB13_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "CC_THB13_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "CC_THB13_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "CC_THB13_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "CC_THB13_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "CC_THB13_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "CC_THB13_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "CC_THB13_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "CC_THB13_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "CC_THB13_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "CC_THB13_Fre", label: "Tần số", color: "#ec4899" },
            { key: "CC_THB13_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },
];
export const MBA10KV_KHINEN_SECTION: Sections[] = [
    {
        section: "MBA T1",
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
        section: "MBA T2",
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

export const MBA10KV_KHOTHAN_CONFIG: ChartGroup[] = [
    {
        area: "MBA T1",
        tags: [
            { key: "CC_THA13_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "CC_THA13_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "CC_THA13_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "CC_THA13_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "CC_THA13_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "CC_THA13_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "CC_THA13_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "CC_THA13_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "CC_THA13_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "CC_THA13_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "CC_THA13_Fre", label: "Tần số", color: "#22c55e" },
            { key: "CC_THA13_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "MBA T2",
        tags: [
            { key: "CC_THB13_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "CC_THB13_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "CC_THB13_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "CC_THB13_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "CC_THB13_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "CC_THB13_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "CC_THB13_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "CC_THB13_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "CC_THB13_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "CC_THB13_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "CC_THB13_Fre", label: "Tần số", color: "#ec4899" },
            { key: "CC_THB13_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },
];
export const MBA10KV_KHOTHAN_SECTION: Sections[] = [
    {
        section: "MBA T1",
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
        section: "MBA T2",
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

export const MBA10KV_DKTT_CONFIG: ChartGroup[] = [
    {
        area: "MBA T1",
        tags: [
            { key: "BL1_AHA11_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "BL1_AHA11_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "BL1_AHA11_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "BL1_AHA11_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "BL1_AHA11_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "BL1_AHA11_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "BL1_AHA11_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "BL1_AHA11_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "BL1_AHA11_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "BL1_AHA11_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "BL1_AHA11_Fre", label: "Tần số", color: "#22c55e" },
            { key: "BL1_AHA11_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "MBA T2",
        tags: [
            { key: "BL1_AHB09_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "BL1_AHB09_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "BL1_AHB09_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "BL1_AHB09_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "BL1_AHB09_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "BL1_AHB09_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "BL1_AHB09_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "BL1_AHB09_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "BL1_AHB09_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "BL1_AHB09_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "BL1_AHB09_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },
];
export const MBA10KV_DKTT_SECTION: Sections[] = [
    {
        section: "MBA T1",
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
            { label: "Nhiệt độ cuộn dây" },
            { label: "Cosphi" },
        ]
    },
    {
        section: "MBA T2",
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
            { label: "Nhiệt độ cuộn dây" },
            { label: "Cosphi" },
        ]
    },
]

export const MBA10KV_SUB5_CONFIG: ChartGroup[] = [
    {
        area: "MBA T1",
        tags: [
            { key: "BL2_BHA13_Uab", label: "Điện áp pha A", color: "#3b82f6" },
            { key: "BL2_BHA13_Ubc", label: "Điện áp pha B", color: "#06b6d4" },
            { key: "BL2_BHA13_Uca", label: "Điện áp pha C", color: "#14b8a6" },
            { key: "BL2_BHA13_Ia", label: "Dòng điện pha A", color: "#6366f1" },
            { key: "BL2_BHA13_Ib", label: "Dòng điện pha B", color: "#8b5cf6" },
            { key: "BL2_BHA13_Ic", label: "Dòng điện pha C", color: "#9333ea" },
            { key: "BL2_BHA13_P", label: "Công suất tác dụng", color: "#0ea5e9" },
            { key: "BL2_BHA13_Q", label: "Công suất phản kháng", color: "#0891b2" },
            { key: "BL2_BHA13_kWh", label: "Điện năng tác dụng", color: "#10b981" },
            { key: "BL2_BHA13_kVArh", label: "Điện năng phản kháng", color: "#65a30d" },
            { key: "BL2_BHA13_Fre", label: "Tần số", color: "#22c55e" },
            { key: "BL2_BHA13_PF", label: "Cosphi", color: "#84cc16" },
        ]
    },
    {
        area: "MBA T2",
        tags: [
            { key: "BL2_BHB12_Uab", label: "Điện áp pha A", color: "#ef4444" },
            { key: "BL2_BHB12_Ubc", label: "Điện áp pha B", color: "#f97316" },
            { key: "BL2_BHB12_Uca", label: "Điện áp pha C", color: "#f59e0b" },
            { key: "BL2_BHB12_Ia", label: "Dòng điện pha A", color: "#ec4899" },
            { key: "BL2_BHB12_Ib", label: "Dòng điện pha B", color: "#be123c" },
            { key: "BL2_BHB12_Ic", label: "Dòng điện pha C", color: "#dc2626" },
            { key: "BL2_BHB12_P", label: "Công suất tác dụng", color: "#eab308" },
            { key: "BL2_BHB12_Q", label: "Công suất phản kháng", color: "#a855f7" },
            { key: "BL2_BHB12_kWh", label: "Điện năng tác dụng", color: "#f97316" },
            { key: "BL2_BHB12_kVArh", label: "Điện năng phản kháng", color: "#ef4444" },
            { key: "BL2_BHB12_Fre", label: "Tần số", color: "#ec4899" },
            { key: "BL2_BHB12_PF", label: "Cosphi", color: "#f59e0b" },
        ]
    },
];
export const MBA10KV_SUB5_SECTION: Sections[] = [
    {
        section: "MBA T1",
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
        section: "MBA T2",
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




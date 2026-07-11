export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const DONGCOKHUS_CONFIG: ChartGroup[] = [
    {
        area: "Quạt tăng áp 1A",
        tags: [
            { key: "Os_1A_ZYFJ_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#06c416b4" },
            { key: "Os_1A_ZYFJ_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#f116f9b7" },
            { key: "Os_1A_ZYFJ_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#f95e16cc" },
            { key: "Os_1A_ZYFJ_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#2263c5ff" },
            { key: "Os_1A_ZYFJ_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#831814c5" },
            { key: "Os_1A_ZYFJ_FJZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#230b50" },
            { key: "Os_1A_ZYFJ_FJZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#f91616dc" },
            { key: "Os_1A_ZYFJ_FJZC_TT_3", label: "Nhiệt độ gối quạt tăng áp #3", color: "#9E2A3A" },
            { key: "Os_1A_ZYFJ_FJ_X_VIB", label: "Độ rung gối quạt trục (X)", color: "#1421dbff" },
            { key: "Os_1A_ZYFJ_FJ_Y_VIB", label: "Độ rung gối quạt trục (Y)", color: "#6366f1" },
            { key: "Os_1A_ZYFJ_QZC_VIB", label: "Độ rung gối trước động cơ", color: "#22c55e" },
            { key: "Os_1A_ZYFJ_HZC_VIB", label: "Độ rung gối sau động cơ", color: "#f97316" },
            { key: "Os_1_8AH_IL2", label: "Dòng điện", color: "#f91674ff" },
        ]
    },
    {
        area: "Quạt tăng áp 1B",
        tags: [
            { key: "Os_1B_ZYFJ_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#f93816ff" },
            { key: "Os_1B_ZYFJ_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#6E026F" },
            { key: "Os_1B_ZYFJ_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#FA891A" },
            { key: "Os_1B_ZYFJ_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#D25353" },
            { key: "Os_1B_ZYFJ_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#2D3C59" },
            { key: "Os_1B_ZYFJ_FJZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#4016f9c2" },
            { key: "Os_1B_ZYFJ_FJZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#4D2B8C" },
            { key: "Os_1B_ZYFJ_FJZC_TT_3", label: "Nhiệt độ gối quạt tăng áp #3", color: "#f91616dc" },
            { key: "Os_1B_ZYFJ_FJ_X_VIB", label: "Độ rung gối quạt trục (X)", color: "#831814c5" },
            { key: "Os_1B_ZYFJ_FJ_Y_VIB", label: "Độ rung gối quạt trục (Y)", color: "#6366f1" },
            { key: "Os_1B_ZYFJ_QZC_VIB", label: "Độ rung gối trước động cơ", color: "#8b5cf6" },
            { key: "Os_1B_ZYFJ_HZC_VIB", label: "Độ rung gối sau động cơ", color: "#9333ea" },
            { key: "Os_1_9AH_IL2", label: "Dòng điện", color: "#0ea5e9" },
        ]
    },
    {
        area: "Quạt tăng áp 2A",
        tags: [
            { key: "Os_2A_ZYFJ_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#0891b2" },
            { key: "Os_2A_ZYFJ_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#84cc16" },
            { key: "Os_2A_ZYFJ_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#ec4899" },
            { key: "Os_2A_ZYFJ_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#be123c" },
            { key: "Os_2A_ZYFJ_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#dc2626" },
            { key: "Os_2A_ZYFJ_FJZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#eab308" },
            { key: "Os_2A_ZYFJ_FJZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#a855f7" },
            { key: "Os_2A_ZYFJ_FJZC_TT_3", label: "Nhiệt độ gối quạt tăng áp #3", color: "#f59e0b" },
            { key: "Os_2A_ZYFJ_FJ_X_VIB", label: "Độ rung gối quạt trục (X)", color: "#10b981" },
            { key: "Os_2A_ZYFJ_FJ_Y_VIB", label: "Độ rung gối quạt trục (Y)", color: "#14b8a6" },
            { key: "Os_2A_ZYFJ_QZC_VIB", label: "Độ rung gối trước động cơ", color: "#06b6d4" },
            { key: "Os_2A_ZYFJ_HZC_VIB", label: "Độ rung gối sau động cơ", color: "#f97316" },
            { key: "Os_2_8AH_IL2", label: "Dòng điện", color: "#ef4444" },
        ]
    },
    {
        area: "Quạt tăng áp 2B",
        tags: [
            { key: "Os_2B_ZYFJ_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#65a30d" },
            { key: "Os_2B_ZYFJ_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#6366f1" },
            { key: "Os_2B_ZYFJ_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#22c55e" },
            { key: "Os_2B_ZYFJ_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#f97316" },
            { key: "Os_2B_ZYFJ_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#f91674ff" },
            { key: "Os_2B_ZYFJ_FJZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#f93816ff" },
            { key: "Os_2B_ZYFJ_FJZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#fc6b03ff" },
            { key: "Os_2B_ZYFJ_FJZC_TT_3", label: "Nhiệt độ gối quạt tăng áp #3", color: "#63c9f1ff" },
            { key: "Os_2B_ZYFJ_FJ_X_VIB", label: "Độ rung gối quạt trục (X)", color: "#FD7979" },
            { key: "Os_2B_ZYFJ_FJ_Y_VIB", label: "Độ rung gối quạt trục (Y)", color: "#301CA0" },
            { key: "Os_2B_ZYFJ_QZC_VIB", label: "Độ rung gối trước động cơ", color: "#050E3C" },
            { key: "Os_2B_ZYFJ_HZC_VIB", label: "Độ rung gối sau động cơ", color: "#6DC3BB" },
            { key: "Os_2_9AH_IL2", label: "Dòng điện", color: "#FF5555" },
        ]
    },
    {
        area: "Bơm vữa tuần hoàn 1A",
        tags: [
            { key: "Os_1A_JYXHB_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#360185" },
            { key: "Os_1A_JYXHB_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#2263c5ff" },
            { key: "Os_1A_JYXHB_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#1652f9ff" },
            { key: "Os_1A_JYXHB_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#0638c4ff" },
            { key: "Os_1A_JYXHB_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#055aa0ff" },
            { key: "Os_1A_JYXHB_ZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#16f9a2ff" },
            { key: "Os_1A_JYXHB_ZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#3F9AAE" },
            { key: "Os_1_4AH_IL2", label: "Dòng điện", color: "#c52d22c5" },
        ]
    },
    {
        area: "Bơm vữa tuần hoàn 1B",
        tags: [
            { key: "Os_1B_JYXHB_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#16f9299d" },
            { key: "Os_1B_JYXHB_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#05a093cc" },
            { key: "Os_1B_JYXHB_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#f116f9b7" },
            { key: "Os_1B_JYXHB_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#f91680b4" },
            { key: "Os_1B_JYXHB_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#4016f9c2" },
            { key: "Os_1B_JYXHB_ZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#4D2B8C" },
            { key: "Os_1B_JYXHB_ZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#f91616dc" },
            { key: "Os_1_5AH_IL2", label: "Dòng điện", color: "#831814c5" },
        ]
    },
    {
        area: "Bơm vữa tuần hoàn 1C",
        tags: [
            { key: "Os_1C_JYXHB_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#63c9f1ff" },
            { key: "Os_1C_JYXHB_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#2263c5ff" },
            { key: "Os_1C_JYXHB_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#1652f9ff" },
            { key: "Os_1C_JYXHB_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#000080" },
            { key: "Os_1C_JYXHB_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#1283dfff" },
            { key: "Os_1C_JYXHB_ZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#f95e16cc" },
            { key: "Os_1C_JYXHB_ZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#0638c4ff" },
            { key: "Os_1_6AH_IL2", label: "Dòng điện", color: "#b5c207ff" },
        ]
    },
    {
        area: "Bơm vữa tuần hoàn 1D",
        tags: [
            { key: "Os_1D_JYXHB_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#9E2A3A" },
            { key: "Os_1D_JYXHB_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#f91d16d5" },
            { key: "Os_1D_JYXHB_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#16f9a2cb" },
            { key: "Os_1D_JYXHB_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#FDB5CE" },
            { key: "Os_1D_JYXHB_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#0dce94ff" },
            { key: "Os_1D_JYXHB_ZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#7816f9d7" },
            { key: "Os_1D_JYXHB_ZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#eb07b2ff" },
            { key: "Os_1_7AH_IL2", label: "Dòng điện", color: "#1305dfff" },
        ]
    },
    {
        area: "Bơm vữa tuần hoàn 2A",
        tags: [
            { key: "Os_2A_JYXHB_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#f116f9dc" },
            { key: "Os_2A_JYXHB_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#E9762B" },
            { key: "Os_2A_JYXHB_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#71f916c5" },
            { key: "Os_2A_JYXHB_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#f99716c0" },
            { key: "Os_2A_JYXHB_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#f91616e8" },
            { key: "Os_2A_JYXHB_ZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#f91616cb" },
            { key: "Os_2A_JYXHB_ZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#71f916b2" },
            { key: "Os_2_4AH_IL2", label: "Dòng điện", color: "#63f17b62" },
        ]
    },
    {
        area: "Bơm vữa tuần hoàn 2B",
        tags: [
            { key: "Os_2B_JYXHB_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#2263c5ff" },
            { key: "Os_2B_JYXHB_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#1652f9ff" },
            { key: "Os_2B_JYXHB_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#017e9494" },
            { key: "Os_2B_JYXHB_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#008cffff" },
            { key: "Os_2B_JYXHB_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#008cffff" },
            { key: "Os_2B_JYXHB_ZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#00f064ff" },
            { key: "Os_2B_JYXHB_ZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#16f9a2ff" },
            { key: "Os_2_5AH_IL2", label: "Dòng điện", color: "#AA2B1D" },
        ]
    },
    {
        area: "Bơm vữa tuần hoàn 2C",
        tags: [
            { key: "Os_2C_JYXHB_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#0dbb78ff" },
            { key: "Os_2C_JYXHB_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#fd0000ff" },
            { key: "Os_2C_JYXHB_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#ff00b3ff" },
            { key: "Os_2C_JYXHB_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#" },
            { key: "Os_2C_JYXHB_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#2eb140ff" },
            { key: "Os_2C_JYXHB_ZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#c51212ff" },
            { key: "Os_2C_JYXHB_ZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#9b0d0dff" },
            { key: "Os_2_6AH_IL2", label: "Dòng điện", color: "#2b59daff" },
        ]
    },
    {
        area: "Bơm vữa tuần hoàn 2D",
        tags: [
            { key: "Os_2D_JYXHB_DJ_U_TT", label: "Nhiệt độ cuộn dây A", color: "#46a8f8ff" },
            { key: "Os_2D_JYXHB_DJ_V_TT", label: "Nhiệt độ cuộn dây B", color: "#cb1ad1ff" },
            { key: "Os_2D_JYXHB_DJ_W_TT", label: "Nhiệt độ cuộn dây C", color: "#6AECE1" },
            { key: "Os_2D_JYXHB_DJ_QZC_TT", label: "Nhiệt độ gối trước động cơ", color: "#12fca2ff" },
            { key: "Os_2D_JYXHB_DJ_HZC_TT", label: "Nhiệt độ gối sau động cơ", color: "#020202ff" },
            { key: "Os_2D_JYXHB_ZC_TT_1", label: "Nhiệt độ gối quạt tăng áp #1", color: "#32ac27ff" },
            { key: "Os_2D_JYXHB_ZC_TT_2", label: "Nhiệt độ gối quạt tăng áp #2", color: "#075300"},
            { key: "Os_2_7AH_IL2", label: "Dòng điện", color: "#1411dbff" },
        ]
    },
];
export type Rows = {
    label: string;
}
export type Sections = {
    section: string;
    rows: Rows[];
};

export const DONGCOKHUS_SECTION: Sections[] = [
    {
        section: "Quạt tăng áp 1A",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Nhiệt độ gối quạt tăng áp #3" },
            { label: "Độ rung gối quạt trục (X)" },
            { label: "Độ rung gối quạt trục (Y)" },
            { label: "Độ rung gối trước động cơ" },
            { label: "Độ rung gối sau động cơ" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Quạt tăng áp 1B",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Nhiệt độ gối quạt tăng áp #3" },
            { label: "Độ rung gối quạt trục (X)" },
            { label: "Độ rung gối quạt trục (Y)" },
            { label: "Độ rung gối trước động cơ" },
            { label: "Độ rung gối sau động cơ" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Quạt tăng áp 2A",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Nhiệt độ gối quạt tăng áp #3" },
            { label: "Độ rung gối quạt trục (X)" },
            { label: "Độ rung gối quạt trục (Y)" },
            { label: "Độ rung gối trước động cơ" },
            { label: "Độ rung gối sau động cơ" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Quạt tăng áp 2B",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Nhiệt độ gối quạt tăng áp #3" },
            { label: "Độ rung gối quạt trục (X)" },
            { label: "Độ rung gối quạt trục (Y)" },
            { label: "Độ rung gối trước động cơ" },
            { label: "Độ rung gối sau động cơ" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơm vữa tuần hoàn 1A",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơm vữa tuần hoàn 1B",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơm vữa tuần hoàn 1C",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơm vữa tuần hoàn 1D",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơm vữa tuần hoàn 2A",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơm vữa tuần hoàn 2B",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơm vữa tuần hoàn 2C",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơm vữa tuần hoàn 2D",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối quạt tăng áp #1" },
            { label: "Nhiệt độ gối quạt tăng áp #2" },
            { label: "Dòng điện" },
        ]
    },
]


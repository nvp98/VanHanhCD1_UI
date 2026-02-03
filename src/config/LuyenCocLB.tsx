export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};
export const LUYENCOC_LB_NHASANG2_CONFIG: ChartGroup[] = [
    {
        area: "Lọc Bụi Nhà Sàng",
        tags: [
            { key: "ApSuat_PV", label: "Áp suất khí nén", color: "#6366f1" },
            { key: "ChenhAp_PV", label: "Chênh áp lọc bụi sàng 2", color: "#22c55e" },
            { key: "DoRungGoiDo1_PV", label: "Độ rung gối đỡ trước", color: "#f97316" },
            { key: "DoRungGoiDo2_PV", label: "Độ rung gối đỡ sau", color: "#f017deff" },
            { key: "NhietDoCuonDayA_PV", label: "Nhiệt độ cuộn dây A", color: "#85409D" },
            { key: "NhietDoCuonDayB_PV", label: "Nhiệt độ cuộn dây B", color: "#0a9c9c" },
            { key: "NhietDoCuonDayC_PV", label: "Nhiệt độ cuộn dây C", color: "#000080" },
            { key: "NhietDoGoiDo1_PV", label: "Nhiệt độ gối đỡ trước", color: "#FF0000" },
            { key: "NhietDoGoiDo2_PV", label: "Nhiệt độ gối đỡ sau", color: "#730099" },
            { key: "NhietDoVongBi1_PV", label: "Nhiệt độ vòng bi trước", color: "#910013" },
            { key: "NhietDoVongBi2_PV", label: "Nhiệt độ vòng bi sau", color: "#9E2A3A" },
        ]
    },
];

export const LUYENCOC_LB_NHASANG2_SECTION = [
    {
        section: "Lọc Bụi Nhà Sàng",
        rows: [
            { label: "Áp suất khí nén" },
            { label: "Chênh áp lọc bụi sàng 2" },
            { label: "Độ rung gối đỡ trước" },
            { label: "Độ rung gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
        ]
    },
]
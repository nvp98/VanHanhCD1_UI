export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};
export const LUYENCOC_QGTH3_CONFIG: ChartGroup[] = [
    {
        area: "Quạt tuần hoàn",
        tags: [
            { key: "QGTH3_RUNGGOIDO2A", label: "Độ rung  gối đỡ trước", color: "#6366f1" },
            { key: "QGTH3_RUNGGOIDO2B", label: "Độ rung  gối đỡ sau", color: "#22c55e" },
            { key: "QGTH3_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#f97316" },
            { key: "QGTH3_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#f017deff" },
            { key: "QGTH3_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#85409D" },
            { key: "QGTH3_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#85409D" },
            { key: "QGTH3_U", label: "Nhiệt độ cuộn dây U", color: "#000080" },
            { key: "QGTH3_V", label: "Nhiệt độ cuộn dây V", color: "#FF0000" },
            { key: "QGTH3_W", label: "Nhiệt độ cuộn dây W", color: "#730099" },
            { key: "CDQ3_TOCDOQUAT", label: "Tốc độ động cơ", color: "#9E2A3A" },
            { key: "QGTH3_DONGDIEN", label: "Dòng điện động cơ", color: "#9E2A3A" },
            { key: "CDQ3_RADARTDO", label: "Nhiệt độ thiết bị đo mức radar", color: "#ff0f6bff" },
            { key: "CDQ3_APLB1", label: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL1", color: "#a31b11ff" },
            { key: "CDQ3_APLB2", label: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL2", color: "#e7681fff" },
        ]
    },
];

export const LUYENCOC_QGTH3_SECTION = [
     {
        section: "Quạt tuần hoàn",
        rows: [
            { label: "Độ rung  gối đỡ trước" },
            { label: "Độ rung  gối đỡ sau" },
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Nhiệt độ cuộn dây U" },
            { label: "Nhiệt độ cuộn dây V" },
            { label: "Nhiệt độ cuộn dây W" },
            { label: "Tốc độ động cơ" },
            { label: "Dòng điện động cơ" },
        ]
    },
    { section: "Nhiệt độ thiết bị đo mức radar" },
    { section: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL1" },
    { section: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL2" },
]
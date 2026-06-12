export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const LUYENCOC_QGTH1_CONFIG: ChartGroup[] = [
    {
        area: "Quạt tuần hoàn",
        tags: [
            { key: "QGTH1_RUNGGOITRUOC", label: "Độ rung  gối đỡ trước", color: "#6366f1" },
            { key: "QGTH1_RUNGGOISAU", label: "Độ rung  gối đỡ sau", color: "#22c55e" },
            { key: "QGTH1_NDGOIDOTRC", label: "Nhiệt độ gối đỡ trước", color: "#f97316" },
            { key: "QGTH1_NDGOIDOSAU", label: "Nhiệt độ gối đỡ sau", color: "#f017deff" },
            { key: "QGTH1_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#85409D" },
            { key: "QGTH1_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#85409D" },
            { key: "QGTH1_U", label: "Nhiệt độ cuộn dây U", color: "#000080" },
            { key: "QGTH1_V", label: "Nhiệt độ cuộn dây V", color: "#FF0000" },
            { key: "QGTH1_W", label: "Nhiệt độ cuộn dây W", color: "#730099" },
            { key: "CDQ1_TOCDOQUAT", label: "Tốc độ động cơ", color: "#9E2A3A" },
            { key: "QGTH1_DONGDIEN", label: "Dòng điện động cơ", color: "#9E2A3A" },
            { key: "CDQ1_NDRADAR", label: "Nhiệt độ thiết bị đo mức radar", color: "#ff0f6bff" },
            { key: "CDQ1_NITOLB1", label: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL1", color: "#a31b11ff" },
            { key: "CDQ1_NITOLB2", label: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL2", color: "#e7681fff" },
        ]
    },
];

export const LUYENCOC_QGTH1_SECTION = [
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
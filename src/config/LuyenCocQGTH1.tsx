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
            { key: "QGTH1_RUNGGOITRUOC", label: "Độ rung  gối đỡ trước 2VT-14101A", color: "#6366f1" },
            { key: "QGTH1_RUNGGOISAU", label: "Độ rung  gối đỡ sau 2VT-14102A", color: "#22c55e" },
            { key: "QGTH1_NDGOIDOTRC", label: "Nhiệt độ gối đỡ trước 2TE-14114A", color: "#f97316" },
            { key: "QGTH1_NDGOIDOSAU", label: "Nhiệt độ gối đỡ sau 2TE-14114B", color: "#f017deff" },
            { key: "QGTH1_NDVBTRC", label: "Nhiệt độ vòng bi trước 2TE-14115A", color: "#85409D" },
            { key: "QGTH1_NDVBSAU", label: "Nhiệt độ vòng bi sau 2TE-14115B", color: "#85409D" },
            { key: "QGTH1_U", label: "Nhiệt độ cuộn dây U 2TE-14113A", color: "#000080" },
            { key: "QGTH1_V", label: "Nhiệt độ cuộn dây V 2TE-14113B", color: "#FF0000" },
            { key: "QGTH1_W", label: "Nhiệt độ cuộn dây W 2TE-14113C", color: "#730099" },
            { key: "CDQ1_TOCDOQUAT", label: "Tốc độ động cơ", color: "#9E2A3A" },
            { key: "QGTH1_DONGDIEN", label: "Dòng điện động cơ", color: "#9E2A3A" },
            { key: "CDQ1_NDRADAR", label: "Nhiệt độ thiết bị đo mức radar 2TT-14118", color: "#ff0f6bff" },
            { key: "CDQ1_NITOLB1", label: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL1 PIA-14110", color: "#a31b11ff" },
            { key: "CDQ1_NITOLB2", label: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL2 PIA-14111", color: "#e7681fff" },
        ]
    },
];

export const LUYENCOC_QGTH1_SECTION = [
    {
        section: "Quạt tuần hoàn",
        rows: [
            { label: "Độ rung  gối đỡ trước 2VT-14101A" },
            { label: "Độ rung  gối đỡ sau 2VT-14102A" },
            { label: "Nhiệt độ gối đỡ trước 2TE-14114A" },
            { label: "Nhiệt độ gối đỡ sau 2TE-14114B" },
            { label: "Nhiệt độ vòng bi trước 2TE-14115A" },
            { label: "Nhiệt độ vòng bi sau 2TE-14115B" },
            { label: "Nhiệt độ cuộn dây U 2TE-14113A" },
            { label: "Nhiệt độ cuộn dây V 2TE-14113B" },
            { label: "Nhiệt độ cuộn dây W 2TE-14113C" },
            { label: "Tốc độ động cơ (vòng/phút)" },
            { label: "Dòng điện động cơ (A)" },
        ]
    },
    { section: "Nhiệt độ thiết bị đo mức radar 2TT-14118" },
    { section: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL1 PIA-14110" },
    { section: "Áp suất khí nito cấp vào thiết bị đo mức điện dung LBL2 PIA-14111" },
]
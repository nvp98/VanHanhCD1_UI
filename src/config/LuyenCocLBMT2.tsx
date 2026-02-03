export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};
export const LUYENCOC_LBMT2_CONFIG: ChartGroup[] = [
    {
        area: "Lọc Bụi Môi Trường 1",
        tags: [
            { key: "TE_14601A", label: "Nhiệt độ trước bộ giảm nhiệt A", color: "#6366f1" },
            { key: "TE_14601B", label: "Nhiệt độ trước bộ giảm nhiệt B", color: "#22c55e" },
            { key: "TE_14602", label: "Nhiệt độ sau bộ giảm nhiệt", color: "#f97316" },
            { key: "LB2_TOCDOQUAT", label: "Tốc độ quạt vòng/phút", color: "#000080" },
            { key: "LB2_PHANTRAM", label: "Tốc độ quạt %", color: "#FF0000" },
            { key: "LB2_DONGDIEN", label: "Dòng điện động cơ QLB", color: "#730099" },
            { key: "LB2_RUNGTRC", label: "Độ rung gối đỡ trước QLB", color: "#9E2A3A" },
            { key: "LB2_RUNGSAU", label: "Độ rung gối đỡ sau QLB", color: "#ff0f6bff" },
            { key: "LB2_NDGOITRC", label: "Nhiệt độ gối đỡ trước QLB", color: "#a31b11ff" },
            { key: "LB2_NDGOISAU", label: "Nhiệt độ gối đỡ sau QLB", color: "#2263c5ff" },
            { key: "LB2_NDBITRC", label: "Nhiệt độ vòng bi trước  QLB", color: "#00a6e7ff" },
            { key: "LB2_NDBISAU", label: "Nhiệt độ vòng bi sau QLB", color: "#f116f9dc" },
            { key: "LB2_U", label: "Nhiệt độ cuộn dây U QLB", color: "#1652f9ff" },
            { key: "LB2_V", label: "Nhiệt độ cuộn dây V QLB", color: "#c52d22c5" },
            { key: "LB2_W", label: "Nhiệt độ cuộn dây W QLB", color: "#050E3C" },
        ]
    },
];

export const LUYENCOC_LBMT2_SECTION = [
    {
        section: "Nhiệt độ trước bộ giảm nhiệt A",
    },
    {
        section: "Nhiệt độ trước bộ giảm nhiệt B",
    },
    {
        section: "Nhiệt độ sau bộ giảm nhiệt",
    },
    {
        section: "Tốc độ quạt",
        rows: [
            { label: "vòng/phút" },
            { label: "%" },
        ]
    },
    {
        section: "Dòng điện động cơ QLB",
    },
    {
        section: "Độ rung gối đỡ trước QLB",
    },
    {
        section: "Độ rung gối đỡ sau QLB",
    },
    {
        section: "Nhiệt độ gối đỡ trước QLB",
    },
    {
        section: "Nhiệt độ gối đỡ sau QLB",
    },
    {
        section: "Nhiệt độ vòng bi trước QLB",
    },
    {
        section: "Nhiệt độ vòng bi sau QLB",
    },
    {
        section: "Nhiệt độ cuộn dây U QLB",
    },
    {
        section: "Nhiệt độ cuộn dây V QLB",
    },
    {
        section: "Nhiệt độ cuộn dây W QLB",
    },
]
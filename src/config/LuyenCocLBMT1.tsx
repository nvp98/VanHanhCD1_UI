export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const LUYENCOC_LBMT1_CONFIG: ChartGroup[] = [
    {
        area: "Lọc Bụi Môi Trường 1",
        tags: [
            { key: "LB_GIAMNHIETA", label: "Nhiệt độ trước bộ giảm nhiệt A", color: "#6366f1" },
            { key: "LB_GIAMNHIETB", label: "Nhiệt độ trước bộ giảm nhiệt B", color: "#22c55e" },
            { key: "LB_SAUGIAMNHIET", label: "Nhiệt độ sau bộ giảm nhiệt", color: "#f97316" },
            { key: "LB_TOCDOQUAT", label: "Tốc độ quạt vòng/phút", color: "#000080" },
            { key: "LB_PHANTRAM", label: "Tốc độ quạt %", color: "#FF0000" },
            { key: "LB_DONGDIEN", label: "Dòng điện động cơ QLB", color: "#730099" },
            { key: "LB_RUNGGOITRC", label: "Độ rung gối đỡ trước QLB", color: "#9E2A3A" },
            { key: "LB_RUNGGOISAU", label: "Độ rung gối đỡ sau QLB", color: "#ff0f6bff" },
            { key: "LB_NDGOITRC", label: "Nhiệt độ gối đỡ trước QLB", color: "#a31b11ff" },
            { key: "LB_NDGOISAU", label: "Nhiệt độ gối đỡ sau QLB", color: "#050E3C" },
            { key: "LB_NDBITRC", label: "Nhiệt độ vòng bi trước  QLB", color: "#360185" },
            { key: "LB_NDBISAU", label: "Nhiệt độ vòng bi sau QLB", color: "#f93816ff" },
            { key: "LB_U", label: "Nhiệt độ cuộn dây U QLB", color: "#2D3C59" },
            { key: "LB_V", label: "Nhiệt độ cuộn dây V QLB", color: "#f116f9b7" },
            { key: "LB_W", label: "Nhiệt độ cuộn dây W QLB", color: "#4D2B8C" },
        ]
    },
];
export type Rows = {
    label: string;
}
export type Sections = {
    section: string;
    rows?: Rows[];
}

export const LUYENCOC_LBMT1_SECTION: Sections[] = [
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
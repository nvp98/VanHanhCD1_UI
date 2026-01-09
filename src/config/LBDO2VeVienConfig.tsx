export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const LBDO2VEVIEN_CONFIG: ChartGroup[] = [
    {
        area: "Lọc bụi đa ống vê viên",
        tags: [
            { key: "TI1151M", label: "Nhiệt độ đầu khói vào", color: "#6366f1" },
            { key: "TI1125aM", label: "Nhiệt độ cuộn dây", color: "#22c55e" },
            { key: "TI1123M", label: "Nhiệt độ gối đỡ động cơ trước", color: "#f97316" },
            { key: "TI1124M", label: "Nhiệt độ gối đỡ động cơ sau", color: "#0245aaff" },
            { key: "TI1121M", label: "Nhiệt độ gối đỡ quạt trước", color: "#85409D" },
            { key: "TI1122M", label: "Nhiệt độ gối đỡ quạt sau", color: "#d606c5ff" },
            { key: "ZI1123M", label: "Độ rung gối đỡ động cơ trước", color: "#000080" },
            { key: "ZI1124M", label: "Độ rung gối đỡ động cơ sau", color: "#FF0000" },
            { key: "ZI1121aM", label: "Độ rung gối đỡ quạt trước", color: "#9E2A3A" },
            { key: "ZI1122aM", label: "Độ rung gối đỡ quạt sau", color: "#2a6bf7ff" },
        ]
    },
];
export type Rows = {
    label: string;
    children?: string[];
}
export type Sections = {
    section: string;
    rows: Rows[];
};

export const LBDO2VEVIEN_SECTION: Sections[] = [
    {
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Đầu khói vào" },
            { label: "Cuộn dây" },
            { label: "Gối đỡ động cơ", children: ["Trước", "Sau"] },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },
    {
        section: "Độ rung (mm/s)",
        rows: [
            { label: "Gối đỡ động cơ", children: ["Trước", "Sau"] },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] },
        ],
    },

]


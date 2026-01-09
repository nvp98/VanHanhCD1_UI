export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const LBDO1VEVIEN_CONFIG: ChartGroup[] = [
    {
        area: "Lọc bụi đa ống vê viên",
        tags: [
            { key: "TI1101M", label: "Nhiệt độ đầu khói vào", color: "#6366f1" },
            { key: "TI1115aM", label: "Nhiệt độ cuộn dây", color: "#22c55e" },
            { key: "TI1114M", label: "Nhiệt độ gối đỡ động cơ trước", color: "#f97316" },
            { key: "TI1113M", label: "Nhiệt độ gối đỡ động cơ sau", color: "#1b57fcff" },
            { key: "TI1111M", label: "Nhiệt độ gối đỡ quạt trước", color: "#85409D" },
            { key: "TI1112M", label: "Nhiệt độ gối đỡ quạt sau", color: "#a306a3ff" },
            { key: "ZI1114M", label: "Độ rung gối đỡ động cơ trước", color: "#000080" },
            { key: "ZI1113M", label: "Độ rung gối đỡ động cơ sau", color: "#FF0000" },
            { key: "ZI1111aM", label: "Độ rung gối đỡ quạt trước", color: "#9E2A3A" },
            { key: "ZI1112aM", label: "Độ rung gối đỡ quạt sau", color: "#1421dbff" },
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

export const LBDO1VEVIEN_SECTION: Sections[] = [
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


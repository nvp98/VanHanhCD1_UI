export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const QGCVEVIEN_CONFIG: ChartGroup[] = [
    {
        area: "Quạt gió chính",
        tags: [
            { key: "TI1015aM", label: "Nhiệt độ stato động cơ 1", color: "#6366f1" },
            { key: "TI1015bM", label: "Nhiệt độ stato động cơ 2", color: "#22c55e" },
            { key: "TI1015cM", label: "Nhiệt độ stato động cơ 3", color: "#f97316" },
            { key: "TI1014M", label: "Nhiệt độ gối động cơ 1", color: "#f017deff" },
            { key: "TI1013M", label: "Nhiệt độ gối động cơ 2", color: "#85409D" },
            { key: "TI1011M", label: "Nhiệt độ bạc quạt gió 1", color: "#e20f56ff" },
            { key: "TI1012M", label: "Nhiệt độ bạc quạt gió 2", color: "#000080" },
            { key: "ZI1014M", label: "Độ rung động cơ gối 1(X)", color: "#FF0000" },
            { key: "ZI1013M", label: "Độ rung động cơ gối 2(X)", color: "#ff00c8ff" },
            { key: "ZI1011aM", label: "Độ rung quạt gió gối 1(X)", color: "#9E2A3A" },
            { key: "ZI1011bM", label: "Độ rung quạt gió gối 1(Y)", color: "#ff0f6bff" },
            { key: "ZI1012aM", label: "Độ rung quạt gió gối 2(X)", color: "#a31b11ff" },
            { key: "ZI1012bM", label: "Độ rung quạt gió gối 2(Y)", color: "#e7681fff" },
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

export const QGCVEVIEN_SECTION: Sections[] = [
    {
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Nhiệt độ stato động cơ", children: ["1", "2", "3"] },
            { label: "Nhiệt độ gối động cơ", children: ["1", "2"] },
            { label: "Nhiệt độ bạc quạt gió", children: ["1", "2"] }
        ],
    },
    {
        section: "Độ rung (mm/s)",
        rows: [
            { label: "Động cơ gối 1", children: ["X"] },
            { label: "Động cơ gối 2", children: ["X"] },
            { label: "Quạt gió gối 1", children: ["X", "Y"] },
            { label: "Quạt gió gối 2", children: ["X", "Y"] }
        ],
    },

]


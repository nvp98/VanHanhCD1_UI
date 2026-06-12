export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const PHOILIEUBANLUOC_CONFIG: ChartGroup[] = [
    {
        area: "Phối liệu",
        tags: [
            { key: "TI1501M", label: "Nhiệt độ đầu khói vào", color: "#6366f1" },
            { key: "TI1515aM", label: "Nhiệt độ cuộn dây", color: "#22c55e" },
            { key: "TI1514M", label: "Nhiệt độ gối đỡ động cơ trước", color: "#85409D" },
            { key: "TI1513M", label: "Nhiệt độ gối đỡ động cơ sau", color: "#ec7513ff" },
            { key: "TI1511M", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#000080" },
            { key: "TI1512M", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#FF0000" },
            { key: "ZI1511aM", label: "Độ rung gối đỡ quạt gió trước X/Y", color: "#393D7E" },
            { key: "ZI1512aM", label: "Độ rung gối đỡ quạt gió sau X/Y", color: "#FF6D1F" },
        ]
    },
    {
        area: "Bản lược",
        tags: [
            { key: "TI1601M", label: "Nhiệt độ đầu khói vào", color: "#0004f5ff" },
            { key: "TI1615aM", label: "Nhiệt độ cuộn dây", color: "#005461" },
            { key: "TI1614M", label: "Nhiệt độ gối đỡ động cơ trước", color: "#DE1A58" },
            { key: "TI1613M", label: "Nhiệt độ gối đỡ động cơ sau", color: "#a06000ff" },
            { key: "TI1611M", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#7132CA" },
            { key: "TI1612M", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#301CA0" },
            { key: "ZI1611aM", label: "Độ rung gối đỡ quạt gió trước X", color: "#842A3B" },
            { key: "ZI1612aM", label: "Độ rung gối đỡ quạt gió say Y", color: "#a73535ff" },
        ]
    },
];

type RowType = {
    label: string;
    children?: string[];
};

type SectionType = {
    section: string;
    rows?: RowType[];
};

export const PHOILIEU_SECTION: SectionType[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Đầu khói vào" },
            { label: "Cuộn dây" },
            { label: "Gối đỡ động cơ", children: ["Trước", "Sau"] },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ quạt gió", children: ["Trước x/y", "Sau x/y"] },
        ],
    },
]

export const BANLUOC_SECTION = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây" },
            { label: "Gối đỡ động cơ", children: ["Trước", "Sau"] },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ quạt gió", children: ["Trước x/y", "Sau x/y"] },
        ],
    },
]


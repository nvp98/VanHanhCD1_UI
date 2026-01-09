export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const PHOILIEU_DUOIMAY1_CONFIG: ChartGroup[] = [
    {
        area: "Phối liệu",
        tags: [
            { key: "TI1201AM", label: "Nhiệt độ đầu khói vào", color: "#6366f1" },
            { key: "TI1215aAM", label: "Nhiệt độ cuộn dây pha A", color: "#22c55e" },
            { key: "TI1215bAM", label: "Nhiệt độ cuộn dây pha B", color: "#f97316" },
            { key: "TI1215cAM", label: "Nhiệt độ cuộn dây pha C", color: "#005670ff" },
            { key: "TI1213AM", label: "Nhiệt độ gối đỡ động cơ trước", color: "#85409D" },
            { key: "TI1214AM", label: "Nhiệt độ gối đỡ động cơ sau", color: "#0004f7ff" },
            { key: "TI1211AM", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#000080" },
            { key: "TI1212AM", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#FF0000" },
        ]
    },
    {
        area: "Đuôi máy #1",
        tags: [
            { key: "TI1301AM", label: "Nhiệt độ đầu khói vào", color: "#CC561E" },
            { key: "TI1315aAM", label: "Nhiệt độ cuộn dây pha A", color: "#005461" },
            { key: "TI1315bAM", label: "Nhiệt độ cuộn dây pha B", color: "#CF0F0F" },
            { key: "TI1315cAM", label: "Nhiệt độ cuộn dây pha C", color: "#360185" },
            { key: "TI1314AM", label: "Nhiệt độ gối đỡ động cơ trước", color: "#DE1A58" },
            { key: "TI1313AM", label: "Nhiệt độ gối đỡ động cơ sau", color: "#3291B6" },
            { key: "TI1311AM", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#7132CA" },
            { key: "TI1312AM", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#301CA0" },
        ]
    },
];

type RowType = {
    label: string;
    children?: string[];
};

type SectionType = {
    name: string;
    section: string;
    rows?: RowType[];
};

export const PHOILIEU_VEVIEN_SECTION: SectionType[] = [
    {
        name: "Phối liệu",
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Đầu khói vào" },
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Gối đỡ động cơ", children: ["Trước", "Sau"] },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },

]

export const DUOIMAY1_SECTION = [
    {
        name: "Đuôi Máy #1",
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Đầu khói vào" },
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Gối đỡ động cơ", children: ["Trước", "Sau"] },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },
]